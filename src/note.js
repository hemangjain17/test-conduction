const quizData = {
  title : "javascript-question-test",
  description : "this is a test for javascript questons we will get into depth for evry concepts",
  defaultMarks : 4,
};

let questionsData = [
  {
    questionId : 1,
    questionText : "what is javascript ?",
    questionMarks : quizData.defaultMarks,
    questionDesc : false,
    questiontype : 'mcq'
  },
  {
    questionId : 2,
    questionText : "what is React ?",
    questionMarks : quizData.defaultMarks,
    questionDesc : false,
    questiontype : 'mcq'
  },
  {
    questionId : 3.0,
    section : "discuss some concept about react :-",
    sectionDesc : '',
    sectionQuestion : [
      {
        questionId : 3.1,
        questionText : "what is props ?",
        questionMarks : quizData.defaultMarks,
        questionDesc : false,
        questiontype : 'mcq'
      },
      {
        questionId : 3.2,
        questionText : "what is children ?",
        questionMarks : quizData.defaultMarks,
        questionDesc : false,
        questiontype : 'mcq'
      },
    ]},
  {
    questionId : 4,
    questionText : "what is node.js ?",
    questionMarks : quizData.defaultMarks,
    questionDesc : false,
    questiontype : 'mcq'
  },
];

let optionsData = [{
  optionsId : 1,
  optionTexts : ['language' , 'compiler' , 'software' , 'system'],
  correctOptionIndex : 0,
},
{
  optionsId : 2,
  optionTexts : ['library' , 'desktop' , 'framework' , 'system'],
  correctOptionIndex : 2,
},
{
  optionsId : 3.1,
  optionTexts : ['HTML-5 attributes' , 'class' , 'object of data' , 'function'],
  correctOption : 0,
},
{
  optionsId : 3.2,
  optionTexts : ['properties' , 'class' , 'component object' , 'function'],
  correctOption : 0,
},
{
  optionsId : 4,
  optionTexts : ['framwork' , 'runtime env' , 'IDE' , 'language'],
  correctOption : 0,
}]; 

//align Items center is not working

function setTimer(hour , min , sec){
  

  {(sec === 0) ? {

  } : set sec-1}
}