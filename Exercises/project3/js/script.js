"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// Preparing a function that will start when the webpage has loaded
$(document).ready(setupDocument);

// Creating variables for the many game states
let currentState;
let titleState;
let hubState;
let scrollState;
let scrollStory;
let wheelState;
let wheelStory;
let paperState;
let paperStateCounter = 0; // Variable to determine what image is shown on the canvas
let paperStory;
let experimentState;
let normalEnding;
let goodEnding;

// Adding variables for item objects
let scrollIcon;
let wheelIcon;
let paperIcon;
let scrollObject;
let wheelObject;

// Adding variables for the state images
let titleImage;
let experimentImage;
let storyImagePlaceholder;
let normalEndImagePlaceholder;
let goodEndImagePlaceholder;
let scrollBackground;
let wheelBackground;

// Adding variables for the object images
let scrollIconImage;
let wheelIconImage;
let paperIconImage;
let wheelImage;
let scrollImage;
let paperImageNormal;
let paperImageBad;
let paperImageGood;

// Making an array for the intro images and their number
let introImages = [];
let introNumber = 8;

// json stuff
let gameScript;

// Adding variables for the music and sound effects
let currentMusic; // Variable used for pausing the current music and calling another song
let titleMusic = new Audio("assets/sounds/shinkaigyonoyuuei.mp3");
let hubMusic = new Audio("assets/sounds/harunoyokan.mp3");
let storyMusic = new Audio("assets/sounds/hinokageri.mp3");
let normalEndingMusic = new Audio("assets/sounds/hisame.mp3");
let goodEndingMusic = new Audio("assets/sounds/torinouta.mp3");
let positiveSFX = new Audio("assets/sounds/se_maoudamashii_system46.wav");
let dialogSFX = new Audio("assets/sounds/se_maoudamashii_onepoint23.wav");

// Creating an array for the text parser answers
let parserAnswers = ["anemone", "872"];

// setupDocument()
//
// Calls functions once the webpage has loaded
function setupDocument() {
  // Displaying the in-game menu
  $( "#menu" ).menu();
  // Dialog test
  $('#experiment').on('click', showDialog);
  // Textbox test
  // setInterval(stateText, 250); // Updates every half second
  // stateText();
  // Menu state test
  $('#scroll-look').on('click', clickScrollState);
  $('#scroll-think').on('click', clickScrollStory);
  $('#wheel-look').on('click', clickWheelState);
  $('#wheel-think').on('click', clickWheelStory);
  $('#paper-look').on('click', clickPaperState);
  $('#paper-think').on('click', clickPaperStory);
  $('#room').on('click', clickHubState);
  // Music test
  stateMusic();
  // json test
  // Loading the .json file
  $.getJSON("data/mermaid_game_script.json")
    // Call the dataLoaded() function if the loading succeeds
    .done(gameScriptLoaded)
    // Call the dataNotLoaded() function if the loading fails
    .fail(gameScriptNotLoaded);
}

// gameScriptdataLoaded()
//
// Loads the .json file into a variable
function gameScriptLoaded(data) {
  // File loaded into variable
  gameScript = data;
}

// gameScriptdataNotLoaded()
//
// Gives a console.error if the data is not loaded
function gameScriptNotLoaded(request, text, error) {
  console.error(error);
}

// showDialog
//
// Shows a dialog box
function showDialog() {
  // Turning the $dialog variable into an actual dialog window
  // It also slowly fades in
  $('#dialog').fadeIn("slow").dialog({
    // Adding options with anonymous functions
    buttons: {
      "Yes": function() {
        // The experiment state is called
        clickExperimentState();
        // The current dialog closes
        $(this).dialog('close');
      },
      "No": function() {
        // The current dialog closes
        $(this).dialog('close');
      }
    }
  });
  // A sound effect plays
  dialogSFX.play();
}

// menuStateChange Test
//
//
function clickHubState() {
  currentState = hubState;
  // The music changes
  stateMusic();
  // The text changes
  stateText();
}
function clickScrollState() {
  currentState = scrollState;
  // The text changes
  stateText();
}

function clickScrollStory() {
  currentState = scrollStory;
  stateMusic();
  // The text changes
  stateText();
  // The menu disappears
  $("#menu").css("opacity", 0);
}

function clickWheelState() {
  currentState = wheelState;
  // The text changes
  stateText();
}

function clickWheelStory() {
  currentState = wheelStory;
  stateMusic();
  // The text changes
  stateText();
}

function clickPaperState() {
  currentState = paperState;
  // Calling textParser() here to prevent it from being overwritten by stateText()
  textParser();
  $('#submit-button').on("click", checkAnswerPaper);
}

function clickPaperStory() {
  currentState = paperStory;
  stateMusic();
  // The text changes
  stateText();
}

function clickExperimentState() {
  currentState = experimentState;
  // Calling textParser() here to prevent it from being overwritten by stateText()
  textParser();
  $('#submit-button').on("click", checkAnswerExperiment);
}

// stateMusic
//
// The music changes depending on the state
function stateMusic() {
  if (currentState === titleState) {
    // currentMusic.loop = true;
    // currentMusic.currentTime = 0;
    // currentMusic.play();
    // Setting up how the music plays
    titleMusic.loop = true;
    titleMusic.currentTime = 0;
    titleMusic.play();
    // Putting the song as the current music
    currentMusic = titleMusic;
  }
  else if (currentState === hubState) {
    // Pausing the current music
    currentMusic.pause();
    // Setting up how the music plays
    hubMusic.loop = true;
    hubMusic.currentTime = 0;
    hubMusic.play();
    // Putting the song as the current music
    currentMusic = hubMusic;
  }
  else if (currentState === scrollStory || currentState === wheelStory || currentState === paperStory) {
    // Pausing the current music
    currentMusic.pause();
    // Setting up how the music plays
    storyMusic.loop = true;
    storyMusic.currentTime = 0;
    storyMusic.play();
    // Putting the song as the current music
    currentMusic = storyMusic;
  }

  else if (currentState === normalEnding) {
    // Pausing the current music
    currentMusic.pause();
    // Setting up how the music plays
    normalEndingMusic.loop = true;
    normalEndingMusic.currentTime = 0;
    normalEndingMusic.play();
    // Putting the song as the current music
    currentMusic = normalEndingMusic;
  }
  else if (currentState === goodEnding) {
    // Pausing the current music
    currentMusic.pause();
    // Setting up how the music plays
    goodEndingMusic.loop = true;
    goodEndingMusic.currentTime = 0;
    goodEndingMusic.play();
    // Putting the song as the current music
    currentMusic = goodEndingMusic;
  }
}

// stateText()
//
// Changes the current text of the textbox based on the state
function stateText() {
  // if (currentState === titleState) {
  //   $('#textbox').text("Click to advance!");
  // }
  if (currentState === hubState) {
    $('#textbox').text("Click an action on the menu!");
  }
  else if (currentState === scrollState) {
    $('#textbox').text("Use the left and right arrow keys to move the scroll!");
  }
  else if (currentState === wheelState) {
    $('#textbox').text("Use the mouse to rotate the wheel!");
  }
  // else if (currentState === scrollStory) {
  //   $('#textbox').text("Story!");
  // }
  else if (currentState === wheelStory) {
    $('#textbox').text("Story!");
  }
  else if (currentState === paperStory) {
    $('#textbox').text("Story!");
  }
  else if (currentState === normalEnding) {
    $('#textbox').text("Normal!");
  }
  else if (currentState === goodEnding) {
    $('#textbox').text("Good!");
  }
}

// textParser()
//
// Makes it so that the user can type into the textbox
function textParser() {
  // Making a variable for the parser
  let parser = $('<div id="text-parser" contenteditable></div>');
  // Adding the text parser into the textbox
  $('#textbox').html(parser);
  // Creating a variable for the div
  let buttonDiv = $('<div></div>');
  // Creating a button for the div
  buttonDiv.append('<button id="submit-button" type="button">Submit</button>');
  // Adding the button to the textbox
  $('#textbox').append(buttonDiv);

}

// checkAnswerPaper()
//
// Compliment to textParser() that makes the submit button process what the user typed
function checkAnswerPaper() {
  // Making the parser text into a variable that always turns into lowercase
  let answer = $('#text-parser').text().toLowerCase();
  // If the answer is correct, then the counter increases and image changes
  if (answer === parserAnswers[0]) {
    console.log("Yeah!");
    paperStateCounter = 2;
    // A sound effect plays
    positiveSFX.play();
  }
  // If the answer is wrong, the counter also increases and the image also changes
  else {
    console.log("Huh?");
    paperStateCounter = 1;
  }
  console.log($('#text-parser').text());
}

// checkAnswerExperiment()
//
// Another compliment to textParser() that makes the submit button process what the user typed
function checkAnswerExperiment() {
  // Making the parser text into a variable
  let answer = $('#text-parser').text();
  // If the answer is correct, then the good ending happens
  if (answer === parserAnswers[1]) {
    console.log("Yeah!");
    // The state changes
    currentState = goodEnding;
    // Music and a sound effect plays
    positiveSFX.play();
    stateMusic();
  }
  // If the answer is wrong, then the normal ending happens
  else {
    console.log("Huh?");
    // The state changes
    currentState = normalEnding;
    // Music plays
    stateMusic();
  }
  console.log($('#text-parser').text());
}

// preload()
//
// p5 function that loads files before the program starts
function preload() {
  // Loading variables for the scene images
  titleImage = loadImage("assets/images/TitlePlaceholder2.png");
  experimentImage = loadImage("assets/images/ExperimentImage.png");
  storyImagePlaceholder = loadImage("assets/images/StoryPlaceholder.png");
  normalEndImagePlaceholder = loadImage("assets/images/NormalEndPlaceholder.png");
  goodEndImagePlaceholder = loadImage("assets/images/GoodEndPlaceholder.png");
  scrollBackground = loadImage("assets/images/ScrollBG.png");
  wheelBackground = loadImage("assets/images/WheelBG.png");
  // Loading variables for the item images
  // The hub icons
  scrollIconImage = loadImage("assets/images/ScrollIcon.png");
  wheelIconImage = loadImage("assets/images/WheelNoText.png");
  paperIconImage = loadImage("assets/images/MagicPaperItem.png");

  // The main items in their states
  scrollImage = loadImage("assets/images/Scroll.png");
  wheelImage = loadImage("assets/images/Wheel.png");
  paperImageNormal = loadImage("assets/images/PaperNormal.png");
  paperImageBad = loadImage("assets/images/PaperNothing.png");
  paperImageGood = loadImage("assets/images/PaperGood.png");

  // Making for loops for the intro images
  for (let i = 1; i <= introNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/intro" + i + ".png";
    // Loading the images into the array
    introImages.push(loadImage(filePath));
  }
}

// setup()
//
// p5 function that sets up other functions or objects at the start of the program
function setup() {
  // Creating the canvas and adjusting its position by pixels
  let p5Canvas = createCanvas(650, 340);
  p5Canvas.position(355, 115);
  // Creating the states
  titleState = new TitleState();
  hubState = new HubState();
  scrollState = new ScrollState();
  scrollStory = new ScrollStory();
  wheelState = new WheelState();
  wheelStory = new WheelStory();
  paperState = new PaperState();
  paperStory = new PaperStory();
  experimentState = new ExperimentState();
  normalEnding = new NormalEnding();
  goodEnding = new GoodEnding();

  // Setting the current state
  currentState = titleState;

  // Adding the items
  scrollIcon = new Item(150, 150, scrollIconImage, 25);
  wheelIcon = new Item(350, 50, wheelIconImage, 25);
  paperIcon = new Item(450, 250, paperIconImage, 25);
  wheelObject = new Wheel(-20, -5, wheelImage, 540, 320);
  scrollObject = new Scroll(1000, 175, scrollImage);

}

// draw()
//
// p5 function that calls a function for every frame
// It is also used to tell the current state to draw whatever is in its method
function draw() {
  currentState.draw();
}

// mousePressed()
//
// Makes a state activate its mousePressed function
function mousePressed() {
  currentState.mousePressed();
}
