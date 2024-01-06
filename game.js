// array for color choices //
var buttonColours = ["red", "blue", "green", "yellow"];

// array for randomly chosen colors //
var gamePattern = [];

// generates random number to choose from buttonColours //
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    
    // chooses random color //
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
};

