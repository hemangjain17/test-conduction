import React from 'react'
import CrossBtn from './CrossBtn'
import { useState , useEffect } from 'react'

const SingleOption = ({ index , questionId , deleteOption , optionData , setOptionData}) => {
  const [optionText , setOptionText] = useState('')

  // const updateOptionText = (index, value, optionId) => {
  //   console.log(index, value, optionId);

  //   // Create a new array with the updated option text
  //   const newOptionData = optionData.map(option => {
  //     if (option.optionsId === optionId) {
  //       // Update the optionTexts array
  //       const newOptionTexts = option.optionTexts.map((optionText, optionIndex) => {
  //         if (optionIndex === index) {
  //           return value;
  //         }
  //         return optionText;
  //       });
  //       return { ...option, optionTexts: newOptionTexts };
  //     }
  //     return option;
  //   });

  //   setOptionData(newOptionData);
  //   setOptionText(value);
  //   console.log('Updated optionData:', newOptionData);
  // };
  function updateOptionText(index , value , optionId){
    // console.log(index , value ,optionId , "OPTION");
    const newOptionData = optionData.map(option => {
      if (option.optionsId === optionId){
        let newOptionText = option.optionTexts.map((optionText , optionIndex) => {
          if (optionIndex === index){
            return value;
          }
          return optionText;
        })
        return {...option , optionTexts : newOptionText }
      }
      return option;
    })
    setOptionData(newOptionData);
    setOptionText(value);
  }
  // useEffect(()=>{
  //   console.log("updated opton =" , optionData);
  // } , [optionData])

  return (
    <div className="option-text-container ">
      <div className="option-index-num">{index+1}</div>
      <input 
        type="text" 
        value={optionText}
        placeholder="option-" 
        className="option-text "
        onChange={(e) => updateOptionText(index , e.target.value , questionId)}
      />
        
      <CrossBtn index={index} id = {questionId} deleteOption={deleteOption} />
    </div>
  )
}

export default SingleOption
