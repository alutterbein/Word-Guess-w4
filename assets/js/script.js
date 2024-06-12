var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var correctCounter = 0;
var incorrectCounter = 0;
var timer;
var timerCount;

// function buildQuiz(){
//   var output = [];
//   questions.forEach(
//     (currentQuestion, questionNumber) => {
//       const answers =[];
//       for(letter in currentQuestion.answers){


//         answers.push(
//           `<label>
//           <input `
//         )
//       }


//     }
//   )
// }
// function showResults(){}
// buildQuiz();
// submitButton.addEventListener('click', showResults);

var questions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];
function startTimer(){
  timer=setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0){
      if(isWin &&timerCount > 0){
      clearInterval(timer);
      quizComplete();
    };
    }
    if (timerCount === 0) {
    clearInterval(timer);
    timeOut();
  }
  
}, 3000);
}


function startQuiz(){
timerCount = 30;
startButton.disabled = true;
renderQuiz
startTimer()

};
function quizComplete(){

  wordBlank.textContent = "Quiz Complete";
  startButton.disabled = false;
  // likely where I'll need to add highscore prompt, and score
}

function timeOut() {
  wordBlank.textContent = "Time's Up!";
  startButton.disabled = false
  // likely where I'll need to add highscore prompt, and score
}



// this could help basic function
// for(var i=0; i <questions.length; i++){
//   var response = window.prompt(questions[i.prompt]);
// if(response== questions[i].answer){
//   correctCounter++;
// }
// else {
//   incorrectCounter++;
// }
// }
// alert("You answered" + correctCounter + "/" + questions.length)



// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        quizComplete();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      timeOut();
    }
  }, 3000);
}

startButton.addEventListener("click", startQuiz);
