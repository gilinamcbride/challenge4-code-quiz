//elements/variables/objects
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var sectionEl = document.querySelector("#section");
var timeLeft = 60;

var mainHeader = document.createElement("h2");
mainHeader.textContent = "Coding Quiz Challenge";
mainEl.appendChild(mainHeader);

var mainText = document.createElement("p");
mainText.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
mainEl.appendChild(mainText);

var startBtn = document.createElement("button");
startBtn.textContent = "Start Quiz";
startBtn.className = "start-btn";
mainEl.appendChild(startBtn);

var questionsObj = [
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. Javascript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. Console.log",
    ],
    correct: "4. Console.log",
  },
  {
    question: "Commonly used data types do NOT include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correct: "3. Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with _____.",
    answers: [
      "1. Quotes",
      "2. Curly brackets",
      "3. Parenthesis",
      "4. Square brackets",
    ],
    correct: "3. Parenthesis",
  },
  {
    question: "Arrays in Javascript can be used to store _____.",
    answers: [
      "1. Numbers and strings",
      "2. Other arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    correct: "4. All of the Above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to values.",
      answers: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Parenthesis"],
      correct: "3. Quotes",
    },
];


//functions

var questionOne = function () {
  mainEl.textContent = "";
  var question1 = document.createElement("h3");
  question1.textContent = questionsObj[0].question;
  mainEl.appendChild(question1);

  questionsObj[0].answers.forEach(function(answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[0].correct) {
        var alertWrong = document.createElement("p");
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      
      question1.remove();
      mainEl.textContent = "";
      questionTwo();
    }
    mainEl.appendChild(answerBtnEl);
  })
};

var questionTwo = function () {
  var question2 = document.createElement("h3");
  question2.textContent = questionsObj[1].question;
  mainEl.appendChild(question2);

  questionsObj[1].answers.forEach(function(answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[1].correct) {
        sectionEl.textContent = "";
        var alertWrong = document.createElement("p");
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        sectionEl.textContent = "";
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      question2.remove();
      mainEl.textContent = "";
      questionThree();
    }
    mainEl.appendChild(answerBtnEl);
  })
};

var questionThree = function () {
  var question3 = document.createElement("h3");
  question3.textContent = questionsObj[2].question;
  mainEl.appendChild(question3);

  questionsObj[2].answers.forEach(function(answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[2].correct) {
        sectionEl.textContent = "";
        var alertWrong = document.createElement("p");
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        sectionEl.textContent = "";
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      question3.remove();
      mainEl.textContent = "";
      questionFour();
    }
    mainEl.appendChild(answerBtnEl);
  })
};

var questionFour = function () {
  var question4 = document.createElement("h3");
  question4.textContent = questionsObj[3].question;
  mainEl.appendChild(question4);

  questionsObj[3].answers.forEach(function(answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[3].correct) {
        var alertWrong = document.createElement("p");
        sectionEl.textContent = "";
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        sectionEl.textContent = "";
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      question4.remove();
      mainEl.textContent = "";
      questionFive();
    }
    mainEl.appendChild(answerBtnEl);
  })
};

var questionFive = function () {
  var question5 = document.createElement("h3");
  question5.textContent = questionsObj[4].question;
  mainEl.appendChild(question5);

  questionsObj[4].answers.forEach(function(answer) {
    var answerBtnEl = document.createElement("button");
    answerBtnEl.textContent = answer;
    answerBtnEl.className = "answer-buttons";
    answerBtnEl.setAttribute("value", answer);
    answerBtnEl.onclick = function () {
      if (this.value !== questionsObj[4].correct) {
        sectionEl.textContent = "";
        var alertWrong = document.createElement("p");
        alertWrong.textContent = "Wrong!";
        alertWrong.className = "answer-alert";
        sectionEl.appendChild(alertWrong);
        timeLeft = timeLeft - 10;
      } else {
        sectionEl.textContent = "";
        var alertCorrect = document.createElement("p");
        alertCorrect.textContent = "Correct!";
        alertCorrect.className = "answer-alert";
        sectionEl.appendChild(alertCorrect);
      }
      question5.remove();
      mainEl.textContent = "";
      sectionEl.textContent = "";
      finishedQuiz();
    }
    mainEl.appendChild(answerBtnEl);
  })
};

function finishedQuiz() {
  mainEl.textContent = "";
  var finalHeader = document.createElement("h3");
  finalHeader.textContent = "All Done!";
  finalHeader.className = "final-header";
  mainEl.appendChild(finalHeader);
  var finalContent = document.createElement("div");
  finalContent.className = "final-content";
  mainEl.appendChild(finalContent);
  var finalScoreText = document.createElement("p");
  finalScoreText.textContent = "Your score is " + timeLeft + ". Initials:";
  finalScoreText.className = "final-paragraph";
  finalContent.appendChild(finalScoreText);
  var scoreForm = document.createElement("form");
  scoreForm.className = "form";
  finalContent.appendChild(scoreForm);
  var id = document.createElement("input");
  id.setAttribute("type", "text");
  id.setAttribute("value", "");
  id.setAttribute("id", "initials");
  var submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Submit");
  submitBtn.setAttribute("id", "submitBtn");
  scoreForm.appendChild(id);
  scoreForm.appendChild(submitBtn);

  submitBtn.addEventListener("submit", function (event) {
    event.preventDefault();
    //submit button isn't working

    var userScores = {
        initials: id.value.trim(),
        highScore: timeLeft
    };

    localStorage.setItem("userScores", JSON.stringify(userScores));
    });

    // go to high scores page
    // window.location.href = "highscores.html";
    

}

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
    // how to I stop the timer when the finishedQuiz page is reached?
    //how to I get time left to equal score
    // else if (finishedQuiz()) {
    //     timerEl.textContent = "";
    //   clearInterval(timeInterval);
    // }
    else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        alert("Time has ended. Quiz is over.");
    }

  }, 1000);
}

function startQuiz() {
  console.log("click");
  countdown();
  questionOne();
}

startBtn.addEventListener("click", startQuiz);

// var questionOne = function() {
//     var question1El = document.createElement("div")
//     question1El.className = "question-header"
//     mainEl.appendChild(question1El);
//     var question1 = document.createElement("h3")
//     question1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
//     question1El.appendChild(question1);
//     var q1Answer1 = document.createElement("button");
//     q1Answer1.textContent= "1. Javascript";
//     q1Answer1.className = "answer-buttons";
//     question1El.appendChild(q1Answer1);
//     var q1Answer2 = document.createElement("button");
//     q1Answer2.textContent= "2. Terminal/Bash";
//     q1Answer2.className = "answer-buttons";
//     question1El.appendChild(q1Answer2);
//     var q1Answer3 = document.createElement("button");
//     q1Answer3.textContent= "3. For Loops";
//     q1Answer3.className = "answer-buttons";
//     question1El.appendChild(q1Answer3);
//     var q1Answer4 = document.createElement("button");
//     q1Answer4.textContent= "4. Console.log";
//     q1Answer4.className = "answer-buttons";
//     question1El.appendChild(q1Answer4);

//     q1Answer1.addEventListener("click", function() {
//         if (true) {
//             alert("wrong");
//             mainEl.textContent = "";
//             questionTwo();
//         }
//     });

//     q1Answer2.addEventListener("click", function() {
//         if (true) {
//             alert("wrong");
//             mainEl.textContent = "";
//             questionTwo();
//         }
//     });

//     q1Answer3.addEventListener("click", function() {
//         if (true) {
//             alert("wrong");
//             mainEl.textContent = "";
//             questionTwo();
//         }
//     });

//     q1Answer4.addEventListener("click", function() {
//         if (true) {
//             alert("correct!");
//             mainEl.textContent = "";
//             questionTwo();
//         }
//     });

// }

// var questionTwo = function() {
//     var question2El = document.createElement("div")
//     question2El.className = "question-header"
//     mainEl.appendChild(question2El);
//     var question2 = document.createElement("h3")
//     question2.textContent = "Commonly used data types do NOT include:";
//     question2El.appendChild(question2);
//     var q2Answer1 = document.createElement("button");
//     q2Answer1.textContent= "1. Strings";
//     q2Answer1.className = "answer-buttons";
//     question2El.appendChild(q2Answer1);
//     var q2Answer2 = document.createElement("button");
//     q2Answer2.textContent= "2. Boolean";
//     q2Answer2.className = "answer-buttons";
//     question2El.appendChild(q2Answer2);
//     var q2Answer3 = document.createElement("button");
//     q2Answer3.textContent= "3. Alerts";
//     q2Answer3.className = "answer-buttons";
//     question2El.appendChild(q2Answer3);
//     var q2Answer4 = document.createElement("button");
//     q2Answer4.textContent= "4. Numbers";
//     q2Answer4.className = "answer-buttons";
//     question2El.appendChild(q2Answer4);
// }

// var questionThree = function() {
//     var question3El = document.createElement("div")
//     question3El.className = "question-header"
//     mainEl.appendChild(question3El);
//     var question3 = document.createElement("h3")
//     question3.textContent = "The condition in an if/else statement is enclosed with _____.";
//     question3El.appendChild(question3);
//     var q3Answer1 = document.createElement("button");
//     q3Answer1.textContent= "1. Quotes";
//     q3Answer1.className = "answer-buttons";
//     question3El.appendChild(q3Answer1);
//     var q3Answer2 = document.createElement("button");
//     q3Answer2.textContent= "2. Curly Brackets";
//     q3Answer2.className = "answer-buttons";
//     question3El.appendChild(q3Answer2);
//     var q3Answer3 = document.createElement("button");
//     q3Answer3.textContent= "3. Parenthesis";
//     q3Answer3.className = "answer-buttons";
//     question3El.appendChild(q3Answer3);
//     var q3Answer4 = document.createElement("button");
//     q3Answer4.textContent= "4. Square Brackets";
//     q3Answer4.className = "answer-buttons";
//     question3El.appendChild(q3Answer4);
// }

// var questionFour = function() {
//     var question4El = document.createElement("div")
//     question4El.className = "question-header"
//     mainEl.appendChild(question4El);
//     var question4 = document.createElement("h3")
//     question4.textContent = "Arrays in Javascript can be used to store _____.";
//     question4El.appendChild(question4);
//     var q4Answer1 = document.createElement("button");
//     q4Answer1.textContent= "1. Numbers and Strings";
//     q4Answer1.className = "answer-buttons";
//     question4El.appendChild(q4Answer1);
//     var q4Answer2 = document.createElement("button");
//     q4Answer2.textContent= "2. Other arrays";
//     q4Answer2.className = "answer-buttons";
//     question4El.appendChild(q4Answer2);
//     var q4Answer3 = document.createElement("button");
//     q4Answer3.textContent= "3. Booleans";
//     q4Answer3.className = "answer-buttons";
//     question4El.appendChild(q4Answer3);
//     var q4Answer4 = document.createElement("button");
//     q4Answer4.textContent= "4. All of the Above";
//     q4Answer4.className = "answer-buttons";
//     question4El.appendChild(q4Answer4);
// }

// var questionFive = function() {
//     var question5El = document.createElement("div")
//     question5El.className = "question-header"
//     mainEl.appendChild(question5El);
//     var question5 = document.createElement("h3")
//     question5.textContent = "String values must be enclosed within _____ when being assigned to values.";
//     question5El.appendChild(question5);
//     var q5Answer1 = document.createElement("button");
//     q5Answer1.textContent= "1. Commas";
//     q5Answer1.className = "answer-buttons";
//     question5El.appendChild(q5Answer1);
//     var q5Answer2 = document.createElement("button");
//     q5Answer2.textContent= "2. Curly Brackets";
//     q5Answer2.className = "answer-buttons";
//     question5El.appendChild(q5Answer2);
//     var q5Answer3 = document.createElement("button");
//     q5Answer3.textContent= "3. Quotes";
//     q5Answer3.className = "answer-buttons";
//     question5El.appendChild(q5Answer3);
//     var q5Answer4 = document.createElement("button");
//     q5Answer4.textContent= "4. Parenthesis";
//     q5Answer4.className = "answer-buttons";
//     question5El.appendChild(q5Answer4);
// }
