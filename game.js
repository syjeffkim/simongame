// array for color choices //
var buttonColours = ["red", "blue", "green", "yellow"];

// array for randomly chosen colors //
var gamePattern = [];

// array to track user clicks //
var userClickedPattern = [];

// You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress. //

var started = false;

// to set levels //

var level = 0;

// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence(). //

$(document).keydown(function() {


        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    
});



// handler function to detect when buttons are clicked with jQuery //
$(".btn").on("click", function() {

    // creates variable for clicked btn //
    var userChosenColour = $(this).attr("id");

    // pushes chosen color to array //
    userClickedPattern.push(userChosenColour);
    
    // plays sound of clicked color //
    playSound(userChosenColour)

    // adds .pressed css to clicked color //
    animatePress(userChosenColour);

});





// chooses next color in sequence and indicates with flash and sound //
function nextSequence() {
    //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called. //
    level++;

    //5. Inside nextSequence(), update the h1 with this change in the value of level. //
    $("#level-title").text("Level " + level);

    // chooses random number 0-3 //
    var randomNumber = Math.floor(Math.random() * 4);

    // chooses random color //
    var randomChosenColour = buttonColours[randomNumber];

    //adds random color to array//
    gamePattern.push(randomChosenColour);

    // flash effect using fadeIn and fadeOut //
    $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200)

    // plays sound of randomized color //
    playSound(randomChosenColour);
    console.log("hi");
};

function playSound(name) {
        // makes audio variable within Audio "constructor" //
        var audio = new Audio("sounds/" + name + ".mp3");
    
        // so within the Audio "constructor" there is a play function we are calling"
        audio.play();
}

//add animatons to user clicks //
function animatePress(currentColour) {
    
    // button that gets clicked turns to class pressed // 
  
    $("." + currentColour).addClass("pressed");


    // function to remove pressed class after 100 second delay //
    setTimeout(function() {
        $("." + currentColour).removeClass("pressed");
      }, 100);


};