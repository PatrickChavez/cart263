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

// Adding variables for item objects
let itemPlaceholder1;
let itemPlaceholder2;
let itemPlaceholder3;
let scrollPlaceholder;
let wheelPlaceholder;

// Adding variables for the state images
let titleImage;

// Adding variables for the object images
let itemImage;
let wheelPlaceholderImage;
let scrollPlaceholderImage;
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
  $('#scroll').on('click', clickScrollState);

// $('#textbox').text("Wow!");
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
function clickScrollState() {
  currentState = scrollState;
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
}

// preload()
//
// p5 function that loads files before the program starts
function preload() {
  // Loading variables for the scene images
  titleImage = loadImage("assets/images/TitlePlaceholder2.png");
  // Loading variables for the item images
  itemImage = loadImage("assets/images/ItemPlaceholder.png");
  itemSelectImage = loadImage("assets/images/StatePlaceholder.png");
  scrollPlaceholderImage = loadImage("assets/images/ScrollTemplate.png");
  wheelPlaceholderImage = loadImage("assets/images/ItemPlaceholder2.png");
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

  // Setting the current state
  currentState = titleState;

  // Adding the items
  itemPlaceholder1 = new Item(150, 150, itemImage, 25);
  itemPlaceholder2 = new Item(350, 50, itemImage, 25);
  itemPlaceholder3 = new Item(450, 250, itemImage, 25);
  // wheelPlaceholder = new Wheel(-20, -5, wheelPlaceholderImage, 100);
  scrollPlaceholder = new Scroll(150, 150, scrollPlaceholderImage);

}

// draw()
//
// p5 function that calls a function for every frame
// It is also used to tell the current state to draw whatever is in its method
function draw() {
  currentState.draw();
  // background(0);
  // Displaying the objects
  // itemPlaceholder1.display();
  // itemPlaceholder2.display();
  // itemPlaceholder3.display();
  // wheelPlaceholder.rotation();
  // scrollPlaceholder.display();
  // scrollPlaceholder.handleInput();
  // scrollPlaceholder.move();
}

// mousePressed()
//
// Makes a state activate its mousePressed function
function mousePressed() {
  currentState.mousePressed();
}
