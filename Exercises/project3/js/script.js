"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// Preparing a function that will start when the webpage has loaded
$(document).ready(setupDocument);

// The current game state
let state = "NORMAL";

// Adding variables for item objects
let itemPlaceholder1;
let itemPlaceholder2;
let itemPlaceholder3;
let scrollPlaceholder;
let wheelPlaceholder;

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
  // Displaying test
  $('#experiment').on('click',showDialog);
  $('#item1').on('click',stateChange);

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

// test
//
//
function stateChange() {
  state = "ITEM1";
}

// test
//
//
function showPicture() {
  if (state === "ITEM1") {
    image(itemSelectImage, 0, 0, width, height);
  }
}

// preload()
//
// p5 function that loads files before the program starts
function preload() {
  // Adding variables for the item images
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
  // Adding the items
  // itemPlaceholder1 = new Item(150, 150, itemImage, 25);
  // itemPlaceholder2 = new Item(350, 50, itemImage, 25);
  // itemPlaceholder3 = new Item(450, 250, itemImage, 25);
  wheelPlaceholder = new Wheel(-20, -5, wheelPlaceholderImage, 100);
  // scrollPlaceholder = new Scroll(150, 150, scrollPlaceholderImage);

}

// draw()
//
// p5 function that calls a function for every frame
function draw() {
  background(0);
  // STATE CHANGE TEST
  showPicture();
  // Displaying the objects
  // itemPlaceholder1.display();
  // itemPlaceholder2.display();
  // itemPlaceholder3.display();
  wheelPlaceholder.rotation();
  // scrollPlaceholder.display();
  // scrollPlaceholder.handleInput();
  // scrollPlaceholder.move();

}
