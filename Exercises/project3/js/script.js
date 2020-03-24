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
let wheelState;
let paperState;
let experimentState;

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

// Adding variables for the object images
let itemImage;
let wheelPlaceholderImage;
let scrollPlaceholderImage;
let paperImage;
let paperImage2;
let itemSelectImage;

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
  $('#wheel-look').on('click', clickWheelState);
  $('#paper-look').on('click', clickPaperState);
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

function clickWheelState() {
  currentState = wheelState;
}

function clickPaperState() {
  currentState = paperState;
}

function clickExperimentState() {
  currentState = experimentState;
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
  else if (currentState === experimentState) {
    $('#textbox').text("Experiment in progress!");
  }
  else if (currentState === paperState) {
    $('#textbox').html();
  }
}

// textParser
//
// Makes it so that the user can type into the textbox
function textParser() {
  // Making a variable for the parser
  let parser = $('<p contenteditable="true"></p>');
  // Adding the text parser to the textbox
  $('#textbox').append(parser);
}

// preload()
//
// p5 function that loads files before the program starts
function preload() {
  // Loading variables for the scene images
  titleImage = loadImage("assets/images/TitlePlaceholder2.png");
  experimentImage = loadImage("assets/images/ExperimentPlaceholder.png");
  // Loading variables for the item images
  itemImage = loadImage("assets/images/ItemPlaceholder.png");
  itemSelectImage = loadImage("assets/images/StatePlaceholder.png");
  scrollPlaceholderImage = loadImage("assets/images/ScrollTemplate.png");
  wheelPlaceholderImage = loadImage("assets/images/ItemPlaceholder2.png");
  paperImage = loadImage("assets/images/PaperPlaceholder.png");
  paperImage2 = loadImage("assets/images/PaperPlaceholder2.png");

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
  wheelState = new WheelState();
  paperState = new PaperState();
  experimentState = new ExperimentState();

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
