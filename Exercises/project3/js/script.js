"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// Preparing a function that will start when the webpage has loaded
$(document).ready(setupDocument);

// Adding variables for item objects
let itemPlaceholder1;
let itemPlaceholder2;
let itemPlaceholder3;

// Adding variables for the object images
let itemImage;

// setupDocument()
//
// Calls functions once the webpage has loaded
function setupDocument() {
  // Displaying the in-game menu
  $( "#menu" ).menu();
  // Displaying the dialog
  showDialog();

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
function showPicture() {
  $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/clown.png")');
}

// preload()
//
// p5 function that loads files before the program starts
function preload() {
  // Adding variables for the item images
  itemImage = loadImage("assets/images/ItemPlaceholder.png");
}

// setup()
//
// p5 function that sets up other functions or objects at the start of the program
function setup() {
  // Creating the canvas and adjusting its position by pixels
  let p5Canvas = createCanvas(650, 340);
  p5Canvas.position(355, 115);
  // Adding the items
  itemPlaceholder1 = new Item(150, 150, itemImage, 25);
  itemPlaceholder2 = new Item(350, 50, itemImage, 25);
  itemPlaceholder3 = new Item(450, 250, itemImage, 25);

}

// draw()
//
// p5 function that calls a function for every frame
function draw() {
  background(0);
  // Displaying the objects
  itemPlaceholder1.display();
  itemPlaceholder2.display();
  itemPlaceholder3.display();

}
