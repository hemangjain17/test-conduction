import React from 'react'
import Option from './opt-display/Option'
import AddOption from './opt-display/AddOption'
import AddQuestion from './AddQuestion'
import RemoveQuestion from './RemoveQuestion'


const Section = ({subquestion , index , optionData , addOption , length , deleteOption , addQuestion}) => {
  // questionId : 3.1,
  //         questionText : "what is props ?",
  //         questionMarks : quizData.defaultMarks,
  //         questionDesc : false,
  //         questiontype : 'mcq',
  //         correctOptionIndex : 0
  return (
    <div >
      <div className="question-text-container">
        <div className="question-index">{index+1}</div>
        <input type="text"  value = {subquestion.questionText} 
          placeholder="Question . . ." className="question-text"/>
        <div className="other-info-container">
          <div className="marks-container">
            <div className="marks-text">marks : </div>
            <input type="number" value = {subquestion.questionMarks} className ="marks-input"/>
          </div>
          <div className="correct-option-container">
            <div className="correct-option-text">correct-option : </div>
            <input type="number" value = {subquestion.correctOptionIndex} className ="correct-option-input"/>
          </div>
        </div>
        <div className="option-text-container">
          {optionData.map((option , index) => (
            <Option key = {option.optionsId} option = {option} index = {index} questionId = {subquestion.questionId} deleteOption={deleteOption}/>))}
        </div>
        <AddOption addOption ={addOption} questionId = {subquestion.questionId}/>
        {(length === index+1) ? <AddQuestion addQuestion={addQuestion} section={true}/> : <RemoveQuestion />}
      </div>
    </div>
  )
}

export default Section
