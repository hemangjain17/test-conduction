import React from 'react'

const AddQuestion = ({addQuestion , updateOptionData}) => {
  function handleQuestionAdding(){
    const id = addQuestion();
    updateOptionData(id);
  }
  return (
    <div className="add-btn-container">
      <div className='add-btn' onClick={() => {handleQuestionAdding()}}> 
        Add 
      </div>
    </div>
  )
}

export default AddQuestion
