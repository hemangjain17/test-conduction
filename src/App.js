import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Thanks from "./components/Thanks.js";
import Response from "./components/Response.js";
import './styles/App.css';
import { useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import StartQuiz from "./components/StartQuiz.js";

function App() {
  const [quizData , setQuizData] = useState({
    title : "",
    description : "",
    defaultMarks : '',
    });
  const [quizTimer , setQuizTimer] = useState({
    hours : 0,
    minutes : 0,
    seconds : 0,
  })
  const [questionsData ,setQuestionsData] = useState([
    {
      questionId : 1,
      questionText : "",
      questionMarks : quizData.defaultMarks,
      questionDesc : false,
      correctOptionIndex : "1"
    }])
  const [optionData , setOptionData] = useState([{
    optionsId : 1,
    optionTexts : [''],
    userChosenIndex : ''
  }]);
  const [showResult , setShowResult] = useState(false);
  return (
    <Router>
      <Routes>
             
        <Route path="/" element = {
          <>
            <Header />
            <Main questionsData={questionsData} optionData={optionData}
              setQuestionsData = {setQuestionsData} setOptionData ={setOptionData}
              quizData = {quizData} setQuizData = {setQuizData} 
              quizTimer = {quizTimer} setQuizTimer={setQuizTimer}/>
          </>}/>
        <Route path="/response" element ={
          <>
            <Header />
            <Response />
          </>}/>
        <Route path="/thank-you" element ={
            <Thanks questionsData={questionsData} optionData={optionData}
              quizData={quizData} showResult={showResult} />
            }/>
        <Route path="/sample-quiz" element ={
            <StartQuiz questionsData={questionsData} optionData={optionData}
              setOptionData = {setOptionData} quizData={quizData} showResult={showResult}
              setShowResult={setShowResult} quizTimer = {quizTimer} />
            }/>
      </Routes>
    </Router>
  );
}

export default App;
