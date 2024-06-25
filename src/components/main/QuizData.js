import React from 'react'
import TitleComponent from './Quiz_Data/TitleComponent'
import Questions from './Quiz_Data/Questions'

const QuizData = ({quizData , questionsData , optionData , addQuestion ,
  updateOptionData, removeQuestion, addOption, deleteOption ,
  setQuestionsData , setOptionData , setQuizData}) => {

  return (
    <div className = "quiz-data-container">
      <TitleComponent quizData = {quizData} setQuizData ={setQuizData}/>
      {questionsData.map((question , index) => 
        (<Questions key = {question.questionId} questionsData = {questionsData}
        setQuestionsData = {setQuestionsData} question = {question} 
        index = {index} length = {questionsData.length} addQuestion={addQuestion} 
        removeQuestion={removeQuestion} 
        optionData={optionData} setOptionData={setOptionData} addOption={addOption} 
        updateOptionData={updateOptionData} deleteOption={deleteOption} 
        />))}
    </div>
  )
}

export default QuizData
