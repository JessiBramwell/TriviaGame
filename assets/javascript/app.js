(function () {

  // Init on click
  $("#start").one("click", init);

  // Variables to store correct and incorrect answers 
  var correct = 0;
  var incorrect = 0;
  var i = 0; // questionsArray index
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
      answers: ["Levator_Scapulae", "Supraspinatus", "Transversus_Abdominis"],
      correct: "Levator_Scapulae"
    },
    {
      img: "assets/images/longissimus.png",
      answers: ["Quadratus_Lumborum", "Longissimus", "Serratus_Anterior"],
      correct: "Longissimus"
    },
    {
      img: "assets/images/rhomboids.png",
      answers: ["Iliacus", "Tensor_Fasciae_Latae", "Rhomboids"],
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
      answers: ["Quadratus_Lumborum", "Trapezius", "Serratus_Anterior"],
      correct: "Trapezius"
    }
  ];

  function init() {
    console.log("init")
    $(".card").show();
    $(".start").hide();
    $(".stats").hide();
    nextQuestion();
    timer();
  }

  // Counter function
  function timer() {
    count = 6;
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000)
  }

  function countDown() {
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
      // console.log(answer)
      var answerSpace = answer
      if (answer.includes("_")) {
        answerSpace = answer.replace(/_/g, " ");
      }
      var el = `<li class="list-group-item" data-name="${answer}"> ${answerSpace}</li>`
      $("#answer-options").append(el);
    }
  }

  // Funciton to select answer
  function select() {
    $("#answer-options").on("click", "li", function () {
      name = $(this).attr("data-name");
      clearInterval(intervalId);
      $("#timer").text('');
      showAnswer(name, this);
      console.log(name)
    });
  }

  // Function to auto display correct answer
  function showAnswer(select, el) {
    var ans = $(`*[data-name="${questionsArray[i].correct}`);
    console.log(ans)

    if (select === questionsArray[i].correct) {
      correct++;
      $(el).addClass("list-group-item-success");
      console.log(questionsArray[i].correct)
    } else {
      incorrect++;
      $(ans).addClass("list-group-item-primary");
      $(el).addClass("list-group-item-danger");
    }
    setTimeout(nextQuestion, 1000);
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
    $("#correct").text(correct);
    $("#incorrect").text(incorrect);

    $(".heading").text("Times Up!");
    $(".stats").show();
    $(".start").show();
    $(".card").hide();
    $("#start").on("click", function () {
      reset();
      init();
    });
  }

  // Function to clear and restart
  function reset() {
    $("#correct").text("");
    $("#incorrect").text("");

    correct = 0;
    incorrect = 0;
    i = 0;
    console.log(correct + " " + incorrect + " " + i)
  }
  select();

})();