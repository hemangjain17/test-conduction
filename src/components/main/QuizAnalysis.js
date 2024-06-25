import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/QuizAnalysis.css'
const QuizAnalysis = ({quizData , questionsData , optionData , setQuizData , quizTimer , setQuizTimer}) => {
  function handleClick(){
    // console.log(quizData , questionsData , optionData);
    // post request to send quizData, questionData and optionData to server
    
      console.log(quizData, questionsData, optionData);

      fetch('/api/create-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quizData,
          questionsData,
          optionData
        })
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });


  }
  function finalDate(value){
    let [hours , minutes , seconds] = value.split(':');
    hours = Number(hours);
    hours *= 3600;
    minutes = Number(minutes);
    minutes *= 60;
    seconds = Number(seconds);
    let newQuizTimer =  {
      hours,
      minutes,
      seconds,
      totalTime : hours+minutes+seconds
    }
    setQuizTimer(newQuizTimer);
  }
  return (
    <div className="quiz-analysis">
      <div className="quiz-analysis-container">
        <div className="quiz-analysis-header">
          <div className="quiz-analysis-header-text">
            Quiz-javascript
          </div>
        </div>
        <div className="num-question">
          <div className="question-numbers">
            <div className="question-num-heading">
              Questions :
            </div>
            <div className="question-num-data">
              <div className="question-num-text">Total Questions </div>
              <div className="question-num-value">1</div>
            </div>
          </div>
          <div className="section-numbers">
            <div className="section-num-heading">
              Sections :
            </div>
            <div className="section-num-data">
              <div className="section-num-text">Total Sections </div>
              <div className="section-num-value">0</div>
            </div>
          </div>
          <div className="section-names">
            <div className="section-name">
              <div className="section-name-heading">
                javascript :
              </div>
              <div className="section-name-data">              
                <div className="section-name-text">total questions </div>
                <div className="section-name-value">1</div>              
              </div>
            </div>
          </div>
          <div className="total-marks-data">
            <div className="total-marks-data-text">Total marks :</div>
            <div className="total-marks-data-value">00</div>
          </div>
        </div>     
        <div className="submit-btn-container">
          <Link to="/thank-you">
            <button className="submit-btn" onClick = {handleClick}>submit</button>
          </Link>
        </div>      
      </div>
      <div className="quiz-timer">
        <div className="add-timer-container">
          <div className = "add-timer-container-text">Add Timer</div>
          <div className='add-timer-container-input'>
            <input type = 'time' step="1" onChange={(e) => finalDate(e.target.value)}/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default QuizAnalysis
