// array for color choices //
var buttonColours = ["red", "blue", "green", "yellow"];

// array for randomly chosen colors //
var gamePattern = [];

// array to track user clicks //
var userClickedPattern = [];

// keydown indiciates start of the game. if it hasn't var started starts at false//
var started = false;

// to set levels and to start it from 0//
var level = 0;

/* started is set to false. so this function is pretty much going to do an action if its TRUE (!started) a key was pressed. 
but in the function it sets the started to true. so next time you press a key its checking if its FALSE a key was pressed.
so now when you press a key, nothing happens because it is TRUE that a key was pressed not false */

$(document).keydown(function() {

// so if the game hasn't started it will do these methods //
if (!started) {

        // targets id level-title and changes its text //
        $("#level-title").text("Level " + level);
        
        nextSequence();
        
        // the variable now needs to be true so it knows the game has started //
        started = true;
    }   
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

    // Gives you the current level because everytime a user clicks it goes up a level//
    checkAnswer(userClickedPattern.length - 1);
});    

// chooses next color in sequence and indicates with flash and sound //
function nextSequence() {
    /* Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    this is so checkAnser() works properly and the game understands where the player is at.*/
    userClickedPattern.length = 0;

    // increase the level by 1 every time nextSequence() is called. We put it in here because line below //
    level++;

    // update the h1 with this change in the value of level //
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


    // function to remove pressed class after 100 millisecond delay //
    setTimeout(function() {
        $("." + currentColour).removeClass("pressed");
      }, 100);
};


// function called checkAnswer(), it should take one input with the name currentLevel //
function checkAnswer(currentLevel) {
    
    /* if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern color. 
    If so then log "success", otherwise log "wrong".*/
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

    /* If the user got the most recent answer right above, then check that they have finished their sequence with another if statement.
    for example, the gamePattern is at red, blue, green. If the user has the same amount of clicks it should go to the next part of the game*/
    if (userClickedPattern.length === gamePattern.length) {
            // Call nextSequence() after a 1000 millisecond delay.//
            setTimeout(function() {
             nextSequence();
           }, 1000);
         }
    
    } else {
        console.log("wrong");
        //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong. //
        playSound("wrong");

        /* 2; In the styles.css file, there is a class called "game-over", apply 
        this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds. */
        $("body").addClass("game-over");
        setTimeout(function() {
        $("body").removeClass("game-over");
        }, 200);

        // 3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.//
        $("h1").text("Game Over, Press Any Key to Restart");
}

    }
    



