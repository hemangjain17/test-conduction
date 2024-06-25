import React from 'react';
import { useState } from 'react';
import Section from './Section.js';
import './Questions.css'
import Option from './opt-display/Option.js';
import AddOption from './opt-display/AddOption.js';
import AddQuestion from './AddQuestion.js';
import RemoveQuestion from './RemoveQuestion.js';

const Questions = ({questionsData , 
  setQuestionsData , question , index , 
  length , addQuestion , removeQuestion ,
  optionData , setOptionData , addOption , 
  updateOptionData , deleteOption }) => {
    
    const [questionText , setQuestionText] = useState('');
    const [questionMarks , setQuestionMarks] = useState(4);
    const [correctOptionIndex , setCorrectOptionIndex] = useState(1);
    
    function updateQuestionText(id, value) {      
      const updatedQuestions = questionsData.map((question) => {
        if (question.questionId === id) {
          return { ...question, questionText: value };
        }
        return question;
      });
      setQuestionsData(updatedQuestions);
      setQuestionText(value);
    }
    
    function updateQuestionMarks(id, value) {
      const updatedQuestions = questionsData.map((question) => {
        if (question.questionId === id) {
          return { ...question, questionMarks: value };
        }
        return question;
      });
      console.log(value , "Question Marks")
      setQuestionsData(updatedQuestions);
      setQuestionMarks(value);
    }
    
    function updateCorrectOptionIndex(id, value) {
      const updatedQuestions = questionsData.map((question) => {
        if (question.questionId === id) {
          return { ...question, correctOptionIndex: value };
        }
        return question;
      });
      console.log("value" , )
      setQuestionsData(updatedQuestions);
      setCorrectOptionIndex(value);
    }
    

  const isSection = typeof(question.questionId) === 'string' ? true : false ;
  let sectionLength = (isSection) ? question.sectionQuestion.length : 0;
  return (
    <div className="question-container">
      {!isSection ? (
      <div className="question-text-container">
        <div className="question-index">
          {index+1}
        </div>
        <input 
          type="text" 
          value={questionText} 
          placeholder="Question . . ." 
          className="question-text"
          onChange={(e) => updateQuestionText(question.questionId , e.target.value)}
        />
        <div className="other-info-container">
          <div className="marks-container">
            <div className="marks-text">
              marks : 
            </div>
            <input 
              type="number" 
              value={question.questionMarks}
              placeholder = '' 
              className ="marks-input"
              onChange={(e) => updateQuestionMarks(question.questionId , e.target.value)}
            />
          </div>
          <div className="correct-option-container">
            <div className="correct-option-text">
              correct-option : 
            </div>
            <select 
              className ="correct-option-input" 
              value={correctOptionIndex}
              onChange={(e) => updateCorrectOptionIndex(question.questionId , e.target.value)}>
                {/* generating options */}
              {optionData.map((option => {
                if (option.optionsId === question.questionId){
                  return option.optionTexts.map(( value , index ) => (<option value={index+1}>{index+1}</option>))
                }
               }))}
            </select>
          </div>
        </div>

        <div className="option-text-container">
          {optionData.map((option) => (
            <Option key = {option.optionsId} 
             optionData={optionData} setOptionData={setOptionData}
             option = {option} questionId = {question.questionId} 
             deleteOption={deleteOption}/>))}
        </div>
        <AddOption addOption = {addOption} questionId = {question.questionId} />
        {(length === index+1) ? 
        <AddQuestion addQuestion={addQuestion} updateOptionData={updateOptionData} questionId = {question.questionId} />
         : <RemoveQuestion removeQuestion = {removeQuestion} questionId = {question.questionId}/>}
      </div>)       
      : 
      <div  className="section">
        <div className="section-container"> 
          <div  className="section-text-container">
            <input type="text" placeholder='Add Section -'  className="section-text"/>
          </div>
          <div  className="section-description-text-container">
            <input type="text" placeholder="Add description ...(optional)"  className="section-description-text"/>
          </div>
        </div> 
        {question.sectionQuestion.map((subquestion , index) => 
        (<Section key = {subquestion.questionId} subquestion = {subquestion} 
            index = {index} optionData = {optionData} addOption ={addOption} 
            length={sectionLength} deleteOption={deleteOption} addQuestion={addQuestion}/>))}
      </div>
    }.
    
    </div>    
  )
}

export default Questions
