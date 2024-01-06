// array for color choices //
var buttonColours = ["red", "blue", "green", "yellow"];

// array for randomly chosen colors //
var gamePattern = [];

// generates random number to choose from buttonColours //
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    // chooses random color //
    var randomChosenColour = buttonColours[randomNumber];

    //adds random color to array//
    gamePattern.push(randomChosenColour);

// choose the element that the randomChosenColor is linked too //
// the randomChosenColour is going to be a "string" so we can use that as the targeted element //

    
    // flash effect using fadeIn and fadeOut //
    $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200)

    // makes audio variable within Audio "constructor" //
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    
    // so within the Audio "constructor" there is a play function we are calling"
    audio.play();
};
  


nextSequence();