import React from 'react'
import SampleQuiz from './SampleQuiz'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'

const StartQuiz = ({questionsData , optionData , setOptionData , quizData , 
    showResult , setShowResult , quizTimer }) => {

  let [isQuizOn , setIsQuizOn] = useState(true);
  // let {hours , minutes , seconds , totalTime} = quizData.quizTimer;
  let {hours , minutes , seconds , totalTime} = quizTimer;
  let [hoursTime , setHourTime] = useState(hours/3600)
  let [minutesTime , setMinuteTime] = useState(minutes/60)
  let [secondsTime , setSecondsTime] = useState(seconds)
  
  useEffect(() => {
    // Set the timeout to end the quiz

    // Set the interval to update the timer
    const timerInterval = setInterval(() => {
      setSecondsTime(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setMinuteTime(prevMinutes => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else {
              setHourTime(prevHours => {
                if (prevHours > 0) {
                  return prevHours - 1;
                } else {
                  setIsQuizOn(false);
                  clearInterval(timerInterval);
                  return prevHours; // Ensure the state is not changed unnecessarily
                }
              });
              return 59; // Reset minutes to 59 when hours are greater than 0
            }
          });
          return 59; // Reset seconds to 59 when minutes are greater than 0
        }
      });
      console.log(secondsTime);
    }, 1000);
    

    // Clear the timeout and interval on component unmount
    return () => {
      clearInterval(timerInterval);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  
  
  return (
    <>
    {isQuizOn ? 
    <>
      <div className='display-timer'>
        <div className="timer">{hoursTime} - {minutesTime} - {secondsTime}</div>
      </div>
      <div className='start-quiz-container'>
        <SampleQuiz questionsData={questionsData} optionData={optionData}
          setOptionData ={setOptionData} quizData={quizData}/>
        <div className='start-quiz-btn-container'>
          <Link to="/">
            <button className='start-quiz-back-btn'>
              back
            </button>
          </Link>
          <Link to="/thank-you">
            <button className='start-quiz-end-btn' onClick={() => setShowResult(true)}>
              end quiz
            </button>
          </Link>
        </div>
      </div>
      </> :
      <div>your quiz end here</div>
    }  
    </>
  )
}

export default StartQuiz
