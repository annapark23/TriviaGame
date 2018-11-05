//=============================================== create variables ===============================================
var correctQuestions = 0;
var incorrectQuestions = 0;
var unansweredQuestions; 
var intervalId;
var number = 10;

//=============================================== functions ======================================================

//start timer ahd show questions with answers when start is clicked

$("#start").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(startGame, 1000);
    document.getElementById('welcomeDiv').style.display = "block";
    document.getElementById('start').style.display = "none";

}

function startGame(){
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if(number===0){
        stop();
        endPage();
    }

}

//stop function
function stop() {
    clearInterval(intervalId);
}

function endPage(){
    //clears out the questions and timer
    document.getElementById('welcomeDiv').style.display = "none";
    document.getElementById('show-number').style.display = "none";
    //shows your results
    $("#timesup").html("<h1>Time's Up!</h1>");
    $("#correct").html("Correct: " + correctQuestions);
    $("#incorrect").html("Correct: " + incorrectQuestions);
    $("#unanswered").html("Correct: " + unansweredQuestions);

}

//reset game

//end game --> you lose/win 

//===============================================run the program =================================================

//make answer choices buttons? / choose the right button? 

//update score