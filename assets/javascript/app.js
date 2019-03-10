// (function () {

// init on click
$("#start").on("click", init);

// Variables to store correct and incorrect answers 
var correct = 0;
var incorrect = 0;
var i = 0;
var count;
var intervalId;

// Array of question and answer objects
var questionsArray = [
  {
    img: "assets/images/infraspinatus.png",
    answers: ["Infraspinatus", "Soleus", "Gastrocnemius"],
    correct: "Infraspinatus"
  },
  {
    img: "assets/images/latissimus_dorsi.png",
    answers: ["Semitendinosus", "Latissimus_Dorsi", "Capitis"],
    correct: "Latissimus_Dorsi"
  },
  {
    img: "assets/images/levator_scapulae.png",
    answers: ["Levator_Scapulae", "Supraspinatus", "Transversus Abdominis"],
    correct: "Levator_Scapulae"
  },
  {
    img: "assets/images/longissimus.png",
    answers: ["Quadratus Lumborum", "Longissimus", "Serratus Anterior"],
    correct: "Longissimus"
  },
  {
    img: "assets/images/rhomboid.png",
    answers: ["Iliacus", "Tensor Fasciae Latae", "Rhomboids"],
    correct: "Rhomboids"
  },
  {
    img: "assets/images/splenius_capitis.png",
    answers: ["Splenius_Capitus", "Gastrocnemius", "Piriformus"],
    correct: "Splenius_Capitus"
  },
  {
    img: "assets/images/teres_major.png",
    answers: ["Iliacus", "Longissimus", "Teres_Major"],
    correct: "Teres_Major"
  },
  {
    img: "assets/images/trapezius.png",
    answers: ["Quadratus Lumborum", "Trapezius", "Serratus Anterior"],
    correct: "Trapezius"
  }

];

function init() {
  $(".card").show();
  $(".start").hide();
  nextQuestion();
  select();
  timer();
}

// Counter function
function timer() {
  count = 6;
  clearInterval(intervalId);
  intervalId = setInterval(countDown, 1000)
}

function countDown() {
  // console.log("countDown")
  $(".lead").hide();
  count--;

  if (count === 0) {
    clearInterval(intervalId);
    showAnswer();
  }
  $("#timer").text(count);
}

// Function to display img, question, and answer
function display() {
  $("#answer-options").empty();
  for (var j = 0; j < 3; j++) {
    var answer = questionsArray[i].answers[j];
    var answerSpace = answer
    if (answer.includes("_")) {
      answerSpace = answer.replace(/_/g, " ");
    }
    var el = `<li class="list-group-item answer" data-name=${answer}>${answerSpace}</li>`
    $("#answer-options").append(el);
  }
}

// Funciton to randomize incorrect and correct answer options 
function select() {

  $("#answer-options").on("click", "li", function () {

    name = $(this).attr("data-name");
    clearInterval(intervalId);
    $("#timer").text('');
    showAnswer(name, this);
  });
}

// Function to auto display next question
function showAnswer(select, el) {
  var ans = $(`*[data-name="${questionsArray[i].correct}`)
  if (select === String(questionsArray[i].correct)) {
    correct++;
    $(el).addClass("list-group-item-success");
  } else {
    incorrect++;
    $(ans).addClass("list-group-item-primary");
    $(el).addClass("list-group-item-danger");
  }
  setTimeout(nextQuestion, 2000);
  i++;
}


// Function to auto display next question
function nextQuestion() {
  if (i > 7) {
    endQuiz();
  } else {
    $("#img").attr("src", questionsArray[i].img);
    display();
    console.log(i)
    timer();
  }
}


// Function to display stats at game end
function endQuiz() {
  $(".heading").text("Times Up!");
  $(".stats").show();
  $("#correct").text(correct);
  $("#incorrect").text(incorrect);
  $(".card").hide();

  console.log("end game");

}
// Function to clear and restart


// }) ();