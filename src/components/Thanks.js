import React from 'react'
import { Link } from 'react-router-dom'
import './Thanks.css'
import Result from './Result'

const Thanks = ({questionsData , optionData , quizData , showResult}) => {
  
  return (
    <div className='thank-container'>
      <div className="after-msg-container">
        <div className="after-msg-text">
          Add any Message after the quiz for participants:
        </div>
        <div className="after-msg-input-container">
          <textarea type="text" className="after-msg-input"></textarea>
        </div>
        <div className='sample-quiz-container'>
          <div className="sample-quiz-text">
            Try your quiz ?
          </div>
          <Link to="/sample-quiz">
            <div className="sample-quiz">quiz</div>
          </Link>
        </div>
        <Link to="/">
          <button className="edit-quiz-btn">Edit Quiz</button> 
        </Link>
      </div>
      <div className='start-sam-quizbtn-container'>
        <Link to="/sample-quiz">
          <button className='start-sam-quizbtn'>Start quiz</button>
        </Link>
      </div>
      {showResult && <Result questionsData = {questionsData} optionData={optionData}/> }
    </div>
  )
}

export default Thanks
