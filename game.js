// var buttonColors = ['red', 'yellow', 'blue', 'green'];
// var gamePattern = [];
// var userClickedPattern = [];
// var start = false;
// var level = 0;

// $(document).keypress(function () {

//     if(!start) {

//         $("#level-title").text("Level " + level);
//         generateRandom();
//         start = true;
//     }
// });


// $(".btn").click( function () {

//         var userChosenColor = $(this).attr("id");

//         userClickedPattern.push(userChosenColor);
//         playSound(userChosenColor);
//         animatePress(userChosenColor);

//         checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
//         console.log("success");

//         if(userClickedPattern.length === gamePattern.length){

//             setTimeout(function (){
//                 generateRandom();
//             },1000);
//         }
//     }

//     else {
//         console.log("wrong");
//         playSound("wrong");

//         $("body").addClass("game-over");
//         setTimeout(function (){
//             $("body").removeClass("game-over");
//         }, 200);

//         $(".level-title").text("Game Over. Press any key to Restart.")
//         start = false;
//         level = 0;
//     }
// }


// function generateRandom() {

//     userClickedPattern = [];

//     level += 1;
//     $("#level-title").text("Level " + level);

//     var rand = Math.floor(Math.random() * 4);
//     var randomButton = buttonColors[rand];
//     gamePattern.push(randomButton);

//     $("#" + randomButton).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomButton);

// }

// function playSound(name) {
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();
// }

// function animatePress(currentColor) {
//     $("#" + currentColor).addClass("pressed");

//     setTimeout(function () {
//         $("#" + currentColor).removeClass("pressed");
//     }, 100);

//     generateRandom();
// }

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

    } else {

        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}