// array for color choices //
var buttonColours = ["red", "blue", "green", "yellow"];

// array for randomly chosen colors //
var gamePattern = [];

// array to track user clicks //
var userClickedPattern = [];

// handler function to detect when buttons are clicked with jQuery //
$(".btn").on("click", function() {

    // creates variable for clicked btn //
    var userChosenColour = $(this).attr("id");

    // pushes chosen color to array //
    userClickedPattern.push(userChosenColour);
        // makes audio variable within Audio "constructor" //
    
    var audio = new Audio("sounds/" + userChosenColour + ".mp3");

    // so within the Audio "constructor" there is a play function we are calling"
    audio.play();
});

// play sounds when you click button //



// chooses next color in sequence and indicates with flash and sound //
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    // chooses random color //
    var randomChosenColour = buttonColours[randomNumber];

    //adds random color to array//
    gamePattern.push(randomChosenColour);

    // flash effect using fadeIn and fadeOut //
    $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200)

    // makes audio variable within Audio "constructor" //
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    
    // so within the Audio "constructor" there is a play function we are calling"
    audio.play();
};