import React from 'react'
import './TitleComponent.css'
import { useState } from 'react';

const TitleComponent = ({quizData , setQuizData}) => {
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [defaultMarks , setDefaultMarks] = useState('');

  function updateQuizTitle(value){
    setQuizData({...quizData , title : value});
    console.log(quizData);
  }
  function updateQuizDescription(value){
    setQuizData({...quizData , description : value});
    console.log(quizData);
  }
  function updateQuizDefaultMarks(value){
    value = Number(value)
    setQuizData({...quizData , defaultMarks : value});
    console.log(quizData);
  }
  return (
    <div  className="title-container"> 
      <div  className="title-text-container">
        <input 
          type="text" 
          value={quizData.title} 
          placeholder="Add Title -" 
          className="title-text"
          onChange={(e) => updateQuizTitle(e.target.value)}
        />
      </div>
      <div  className="title-description-text-container">
        <input 
          type="text" 
          value={quizData.description} 
          placeholder="Add description ..."  
          className="title-description-text"
          onChange={(e) => updateQuizDescription(e.target.value)}
        />
      </div>
      <div  className="default-marks-text-container">
        <div className="title-default-marks-text">Default Marks = </div>
        <input 
        type="number" 
        value={quizData.defaultMarks}  
        className="title-default-marks"
        onChange={(e) => updateQuizDefaultMarks(e.target.value)}
        />
      </div>      
    </div>
  );
}

export default TitleComponent

