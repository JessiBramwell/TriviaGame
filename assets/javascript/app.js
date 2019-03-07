// (function () {
// DOM events
$("#start").on("click", init);

// init on click

// Variables to store correct and incorrect answers 
var correct = 0;
var incorrect = 0;
var count = 10;
var intervalId;

// Array of random answers
var answerArr = [];

// Array of question and answer objects
var questions = {
  "answer": 
  "answer": "img url",
  "answer": "img url",
  "answer": "img url"
}

function init() {
  console.log("init")
  $(".start").hide();
  timer();
}

// Counter function
function timer() {
  console.log("timer")

  count = 10;
  clearInterval(intervalId);
  intervalId = setInterval(countDown, 1000)
}

function countDown() {
  // console.log("countDown")
  $("#timer").text(count);
  count--;
  // console.log(count);
  if (count === 0) {
    clearInterval(intervalId);
    showAnswer();
  }
}

// Function to randomize questions and correct answer positions
// Funciton to randomize incorrect answer options 
// Function to display img, question, and answer

// Function to auto display next question
function showAnswer() {

  nextquestion()
}

// Function to auto display next question
function nextquestion() {
  countDown()

}

// Function to display stats at game end
// Function to clear and restart


// }) ();