  
var timer = document.querySelector("#time");
var button = document.querySelector("#startbtn");
var questionTitle = document.querySelector("#question");
var firstPage = document.querySelector("#quizPart");
var start = document.querySelector("#quizStart");
var renderanswer = document.querySelector("#checkAns");
var quizContainer = document.querySelector("#quizContainer");
var questionChoices = document.querySelector(".ol");
var checkAns = document.querySelector("#checkAns");
var answerOutput = document.querySelector("#answerOutput");
var lastPage = document.querySelector("#lastPage");
var scorePart = document.querySelector("#scorePart");
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "images/correct.mp3");
var audioElementWrong = document.createElement("audio");
audioElementWrong.setAttribute("src", "images/wrong.mp3");

var count = 0;


  
  
  var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    Correct: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    Correct: "parentheses"
  },
  {
      title: "Inside which HTML element do we put the JavaScript?",
      choices: ["scripting", "javascript", "script", "js"],
      Correct: "script"
  },
  {
      title: "How do you write Hello World in an alert box?",
      choices: ["msg(\"Hello World\")", "msgBox(\"Hello World\")", "alert(\"Hello World\")", "alertBox(\"Hello World\")" ],
      Correct: "alert(\"Hello World\")"
  },
  {
      title: "How do you create a function in JavaScript?",
      choices: ["function myFunctoion()", "function:myFunctio()", "function = myFunction()", "function.myFunction()" ],
      Correct: "function myFunction()"
  }];



//handle Question Change



function handleClickEvent(correctAnswer, elem){
  const userChoice = $(elem).text();
  
  if(userChoice == correctAnswer){
    
    answerOutput.innerHTML=("Correct!!!");
    audioElement.play();
     
  } else{
    
    answerOutput.innerHTML=("Wrong");
    secondsLeft-=10
    audioElementWrong.play();
  }
  
  $(quizContainer).empty()
  count++ 
  renderQuestionObj(count)

}

// renders answer choices

function renderChoices(arr){

  var choicesContainer = document.createElement("ul");
  
  for(i = 0; i < arr.length; i++){
    
    $(choicesContainer).append("<li class='choiceItem'>"+arr[i]+"</li>");
  }
    $(quizContainer).append(choicesContainer)
}

$(document).on('click', '.choiceItem',function(){
  var correctAnswer = questions[count].Correct
  var that = this;
  handleClickEvent(correctAnswer, that);
  
});

//renders question objects

function renderQuestionObj(i){
  var choices = questions[i].choices;
  var correctAnswer = questions[i].Correct

  $(quizContainer).prepend(questions[i].title);
  renderChoices(choices)
  if(count >= 4){
    lastPage.style.display = "block";
    quizContainer.style.display = "none";
    answerOutput.style.display = "none";
    lastPage.innerHTML= "Your " + $(scorePart).text() + " "+ "is " +  secondsLeft;
    timer.style.display = "none";
    scorePart.style.display = "none";
  
    

  
  }
}


    $.fn.log = function() {
      console.log.apply(console, this);
      return this;
    };


    
//last page with score



//Timer
    

var secondsLeft = 75;
function sendMessage(){
    timer.textContent = "Time is up";
}
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  
//Quiz Start Button

   button.addEventListener("click", function(){
      quizContainer.style.display = "block";
      firstPage.style.display = "none";
      renderQuestionObj(count)
      setTime();
   });

   





 
      
    
    

   


   