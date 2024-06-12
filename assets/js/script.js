var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


var correctCounter = 0;
var timer;
var timerCount;

const questions = [
  {
    question: "Who invented Javascript?",
    answers: ["Sean King", "Steven Green", "Brendan Eich", "Benjamin Franklin"],
    correct: 2
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Node.js", "Typescript", "npm", "Python"],
    correct: 2
  },
  {
    question: "What key word do you use to declare a variable in javascript?",
    answers: ["const", "var", "let", "All three can be used"],
    correct: 3
  },

];
var currentQuestion = 0;
var correctAnswers = 0;

function showQuestion(){
  var questionText =
  document.getElementById("question-text");
  questionText.textContent = 
  questions[currentQuestion].question;

var answers = 
document.querySelectorAll(".answer");
answers.forEach((answer, index) => {
  answer.textContent = 
  questions[currentQuestion].answers[index];

});
var feedback = 
document.getElementById("feedback");
feedback.textContent = "";


}
function checkAnswer(selected) {
  var feedback =
  document.getElementById("feedback");
  if (selected ===
    questions[currentQuestion].correctAnswer) {
      feedback.textContent = "Correct!";
      correctCounter++;
    } else{
      feedback.textContent= "Incorrect!";
    }
setTimeout(() => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
showQuestion();
  } else {
    var quizContainer = 
    document.querySelector(".quiz");
    quizContainer.innerHTML = `<p> You got ${correctAnswers} out of ${questions.length} questions.</p>`;
  }

}, 1000);
}


function startTimer(){
  timer=setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0){
      if(timerCount > 0){
      clearInterval(timer);
      quizComplete();
    };
    }
    if (timerCount === 0) {
    clearInterval(timer);
    timeOut();
  }
  
}, 1000);
}
// var timeLeft = 30;
// var timer = setInterval(function() {
// timeLeft--;
// document.getElementById('timer').textContent = timeLeft;
// if (timeLeft <= 0) {
// clearInterval(timer);
// alert('Time is up!');
// }
// }, 1000);



function startQuiz(){
timerCount = 30;
startButton.disabled = true;
startTimer();
showQuestion()

};
// function quizComplete(){

//   quizContainer.textContent = "Quiz Complete";
//   startButton.disabled = false;
//   // likely where I'll need to add highscore prompt, and score
// }

function timeOut() {
  quizContainer.textContent = "Time's Up!";
  startButton.disabled = false
  // likely where I'll need to add highscore prompt, and score
}




// The setTimer function starts and stops the timer
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
        // Clears interval and stops timer
        clearInterval(timer);
       // quizComplete();
      }
      // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      timeOut();
    }
  }, 1000);
}

startButton.addEventListener("click", startQuiz);
