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
// Variable to determine what image is shown on the canvas
let paperStateCounter = 0;
let paperStory;
let experimentState;
let normalEnding;
let goodEnding;

// Adding variables for item objects
let itemPlaceholder1;
let itemPlaceholder2;
let itemPlaceholder3;
let scrollPlaceholder;
let wheelPlaceholder;
let paperPlaceholder;
let paperPlaceholder2;

// Adding variables for the state images
let titleImage;
let experimentImage;
let storyImagePlaceholder;
let normalEndImagePlaceholder;
let goodEndImagePlaceholder;

// Adding variables for the object images
let itemImage;
let wheelPlaceholderImage;
let scrollPlaceholderImage;
let paperImage;
let paperImage2;
let paperImage3;
let itemSelectImage;

// Creating an array for the text parser answers
let parserAnswers = ["corn", "647"];

// setupDocument()
//
// Calls functions once the webpage has loaded
function setupDocument() {
  // Displaying the in-game menu
  $( "#menu" ).menu();
  // Dialog test
  $('#experiment').on('click', showDialog);
  // Textbox test
  setInterval(stateText, 500); // Updates every half second
  // Menu state test
  $('#scroll-look').on('click', clickScrollState);
  $('#scroll-think').on('click', clickScrollStory);
  $('#wheel-look').on('click', clickWheelState);
  $('#wheel-think').on('click', clickWheelStory);
  $('#paper-look').on('click', clickPaperState);
  $('#paper-think').on('click', clickPaperStory);
  $('#room').on('click', clickHubState);

}

// showDialog
//
// Shows a dialog box
function showDialog() {
  // Turning the $dialog variable into an actual dialog window
  $('#dialog').dialog({
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
}

// menuStateChange Test
//
//
function clickHubState() {
  currentState = hubState;
}
function clickScrollState() {
  currentState = scrollState;
}

function clickScrollStory() {
  currentState = scrollStory;
}

function clickWheelState() {
  currentState = wheelState;
}

function clickWheelStory() {
  currentState = wheelStory;
}

function clickPaperState() {
  currentState = paperState;
  // Calling textParser() here to prevent it from being overwritten by stateText()
  textParser();
  $('#submit-button').on("click", checkAnswerPaper);
}

function clickPaperStory() {
  currentState = paperStory;
}

function clickExperimentState() {
  currentState = experimentState;
  // Calling textParser() here to prevent it from being overwritten by stateText()
  textParser();
  $('#submit-button').on("click", checkAnswerExperiment);
}

// stateText()
//
// Changes the current text of the textbox based on the state
function stateText() {
  if (currentState === titleState) {
    $('#textbox').text("Click to advance!");
  }
  else if (currentState === hubState) {
    $('#textbox').text("Click an action on the menu!");
  }
  else if (currentState === scrollState) {
    $('#textbox').text("Use the left and right arrow keys to move the scroll!");
  }
  else if (currentState === wheelState) {
    $('#textbox').text("Use the mouse to rotate the wheel!");
  }
  else if (currentState === scrollStory) {
    $('#textbox').text("Story!");
  }
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

// checkAnswer()
//
// Compliment to textParser() that makes the submit button process what the user typed
function checkAnswerPaper() {
  // Making the parser text into a variable
  let answer = $('#text-parser').text();
  // If the answer is correct, then the counter increases and image changes
  if (answer === parserAnswers[0]) {
    console.log("Yeah!");
    paperStateCounter = 2;
  }
  // If the answer is wrong, the counter also increases and the image also changes
  else {
    console.log("Huh?");
    paperStateCounter = 1;
  }
  console.log($('#text-parser').text());
}

function checkAnswerExperiment() {
  // Making the parser text into a variable
  let answer = $('#text-parser').text();
  // If the answer is correct, then the good ending happens
  if (answer === parserAnswers[1]) {
    console.log("Yeah!");
    currentState = goodEnding;
  }
  // If the answer is wrong, then the normal ending happens
  else {
    console.log("Huh?");
    currentState = normalEnding;
  }
  console.log($('#text-parser').text());
}

// preload()
//
// p5 function that loads files before the program starts
function preload() {
  // Loading variables for the scene images
  titleImage = loadImage("assets/images/TitlePlaceholder2.png");
  experimentImage = loadImage("assets/images/ExperimentPlaceholder.png");
  storyImagePlaceholder = loadImage("assets/images/StoryPlaceholder.png");
  normalEndImagePlaceholder = loadImage("assets/images/NormalEndPlaceholder.png");
  goodEndImagePlaceholder = loadImage("assets/images/GoodEndPlaceholder.png");
  // Loading variables for the item images
  itemImage = loadImage("assets/images/ItemPlaceholder.png");
  itemSelectImage = loadImage("assets/images/StatePlaceholder.png");
  scrollPlaceholderImage = loadImage("assets/images/ScrollTemplate.png");
  wheelPlaceholderImage = loadImage("assets/images/ItemPlaceholder2.png");
  paperImage = loadImage("assets/images/PaperPlaceholder.png");
  paperImage2 = loadImage("assets/images/PaperPlaceholder2.png");
  paperImage3 = loadImage("assets/images/PaperPlaceholder3.png");

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
  itemPlaceholder1 = new Item(150, 150, itemImage, 25);
  itemPlaceholder2 = new Item(350, 50, itemImage, 25);
  itemPlaceholder3 = new Item(450, 250, itemImage, 25);
  wheelPlaceholder = new Wheel(-20, -5, wheelPlaceholderImage, 100);
  scrollPlaceholder = new Scroll(150, 150, scrollPlaceholderImage);

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
