import React from 'react'
import SingleOption from './SingleOption.js'
import './Option.css'

const Option = ({option , optionData , setOptionData , questionId , deleteOption}) => {
  // optionsId : 1,
  //     optionTexts : ['language' , 'compiler' , 'software' , 'system'],
  //     correctOptionIndex : 0,
  
  return (
    <div>
      {(option.optionsId === questionId) ? option.optionTexts.map((singleOption , index) =>
        (<SingleOption key = {index} index = {index} 
        questionId = {questionId} deleteOption={deleteOption} 
        optionData={optionData} setOptionData={setOptionData}/>)) : ''}
    </div>  
  )
}

export default Option
