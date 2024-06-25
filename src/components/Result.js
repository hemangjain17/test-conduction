import React from 'react'

const Result = ({ questionsData, optionData }) => {
  let correctAnswer = 0;
  let inCorrectAnswer = 0;
  let notAttempted = 0;

  questionsData.forEach((question) => {
    optionData.forEach((option) => {
      if (question.questionId === option.optionsId) {
        if (question.correctOptionIndex === option.userChosenIndex) {
          correctAnswer++;
        } else if (option.userChosenIndex === '' || option.userChosenIndex === undefined || option.userChosenIndex === null) {
          notAttempted++;
        } else if (question.correctOptionIndex !== option.userChosenIndex) {
          inCorrectAnswer++;
        }
      }
    });
  });

  return (
    <div className='your-result'>
      <h3>Your result</h3>
      <div>Correct answers = <span className='correct-answers-num'>{correctAnswer}</span></div>
      <div>Incorrect answers = <span className='incorrect-answers-num'>{inCorrectAnswer}</span></div>
      <div>Not attempted = <span className='not-attempted-num'>{notAttempted}</span></div>
    </div>
  );
}

export default Result;
