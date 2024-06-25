// src/controllers/testController.js

const { User, Test, Question, Option, Response } = require('../models/testConduction');
function generateRandomId() {
    // Generate a random number between 1000 and 9999 (inclusive)
    return Math.floor(1000 + Math.random() * 9000);
}


// Create a new test
const createTest = async (req, res) => {
    console.log("Entered..")
    console.log(req.body)
    // const { userId, title, description, questions } = req.body;
    const userId = generateRandomId()
    const title = req.body.quizData.title 
    const description = req.body.quizData.description
    const questions =  [req.body.questionsData , req.body.optionData] 
    console.log(userId , title , description , questions)
    if (!userId || !title || !questions) {
        return res.status(400).send('Missing required fields.');
    }

    try {
        const newTest = new Test({ title, description, createdBy: userId });
        
        await newTest.save();
        console.log("Enter")
        for (const questionData of questions) {
            const newQuestion = new Question({
                test: newTest._id,
                questionText: questionData.questionText,
                questionType: questionData.questionType
            });
            await newQuestion.save();

            if (questionData.questionType === 'multipleChoice') {
                for (const optionText of questionData.options) {
                    const newOption = new Option({ question: newQuestion._id, optionText });
                    await newOption.save();
                    newQuestion.options.push(newOption._id);
                }
                await newQuestion.save();
            }
        }

        res.status(201).send('Test created successfully.');
    } catch (error) {
        res.status(500).send('Error creating test.');
    }
};

// Submit a test response
const submitResponse = async (req, res) => {
    const { userId, testId, answers } = req.body;
    if (!userId || !testId || !answers) {
        return res.status(400).send('Missing required fields.');
    }

    try {
        const newResponse = new Response({ test: testId, user: userId });

        for (const answerData of answers) {
            newResponse.answers.push({
                question: answerData.questionId,
                answerText: answerData.answerText || null,
                selectedOption: answerData.selectedOptionId || null
            });
        }

        await newResponse.save();
        res.status(201).send('Response submitted successfully.');
    } catch (error) {
        res.status(500).send('Error submitting response.');
    }
};

// Get all tests
const getAllTests = async (req, res) => {
    try {
        const tests = await Test.find().populate('createdBy', 'name email');
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).send('Error fetching tests.');
    }
};

// Get test by ID
const getTestById = async (req, res) => {
    const { testId } = req.params;
    try {
        const test = await Test.findById(testId).populate('createdBy', 'name email');
        if (!test) {
            return res.status(404).send('Test not found.');
        }
        const questions = await Question.find({ test: testId }).populate('options');
        res.status(200).json({ test, questions });
    } catch (error) {
        res.status(500).send('Error fetching test.');
    }
};

module.exports = {
    createTest,
    submitResponse,
    getAllTests,
    getTestById
};
