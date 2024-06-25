import React from 'react'
import deletebox from './deletebox.png'

const RemoveQuestion = ({removeQuestion , questionId}) => {
  return (
    <div className = "remove-btn-container" onClick={() => removeQuestion(questionId)}>
      <div className = "remove-btn" >
        <img src = {deletebox} className = "remove-btn-image"/>
      </div>
    </div>
  )
}

export default RemoveQuestion
