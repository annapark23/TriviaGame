//=============================================== create variables ===============================================

var intervalId;
var number = 60;

var numCorrect = 0;
var numIncorrect = 0;

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
    $("#show-number").html("<h2>" + number + " seconds left</h2>");
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
    $("#correct").html("Correct: " + numCorrect);
    $("#incorrect").html("Incorrect: " + numIncorrect);

}


//function to check the answers if they are correct or not
function submitAnswer() {
    var radios = [];

    for (var i=0; i<5; i++){
        radios.push($("input[name=" + i + "]:checked").val());
        console.log("radios: ", radios);
        
        if ($("input[name=" + i + "]:checked").val() === "correct") {
            numCorrect++;
            endPage();
        }
        else if ($("input[name=" + i + "]:checked").val() === "incorrect") {
            numIncorrect++;
            endPage();
        }
    }
}
