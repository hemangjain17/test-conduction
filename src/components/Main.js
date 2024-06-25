import React from 'react'
import QuizData from './main/QuizData';
import QuizAnalysis from './main/QuizAnalysis';


const Main = ({questionsData , optionData , setQuestionsData , 
  setOptionData , quizData , setQuizData , quizTimer , setQuizTimer}) => {
  
  function addQuestion(){
    const length = questionsData.length
    const id = questionsData[length-1].questionId+1;
    let newQuestionsData = [...questionsData , {
      questionId : id,
      questionText : "",
      questionMarks : quizData.defaultMarks,
      questionDesc : false,
      correctOptionIndex : "1"
    }]
    setQuestionsData(newQuestionsData);
    return id;
  }
  function updateOptionData(id){
    const newOptionData = [...optionData , {
      optionsId : id,
      optionTexts : [''],
      userChosenIndex : ''
    }]
    setOptionData(newOptionData);
  }
  function removeQuestion(id){
    const newQuestionsData = questionsData.filter((question) => {
      if (id !== question.questionId){
        return question;
      } 
    })
    setQuestionsData(newQuestionsData);
  }
  
  
  function addOption(id) {
    const newOptions = optionData.map((option) => {
      if (id === option.optionsId) {
        option.optionTexts.push('');
      }
      return option;
    });
    setOptionData(newOptions);
  }
  function deleteOption(removeIndex , id){
    const newOptions = optionData.map((option) => {
      if (id === option.optionsId) {
        option.optionTexts.splice(removeIndex , 1);
      }
      return option;
    });
    setOptionData(newOptions);
  }
  
  return (
    <div className="main-body-container">
      <QuizData quizData={quizData} questionsData={questionsData} 
      optionData={optionData} addQuestion={addQuestion} 
      updateOptionData={updateOptionData} removeQuestion={removeQuestion}
      addOption={addOption} deleteOption={deleteOption}
      setOptionData={setOptionData} setQuestionsData={setQuestionsData}
      setQuizData={setQuizData}/>

      <QuizAnalysis quizData={quizData} questionsData={questionsData} 
      optionData={optionData} setQuizData={setQuizData}
      quizTimer = {quizTimer} setQuizTimer={setQuizTimer}/>
    </div>
  )
}

export default Main
