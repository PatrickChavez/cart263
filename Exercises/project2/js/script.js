"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
// Preparing a function that will start once the page has loaded
$(document).ready(setupDocument);

// Making an array for the story images and their number
let storyImages = [];
let storyNumber = 4;

// Making an array for the bad endings and their number
let badEndImages = [];
let badEndNumber = 3;

// Making an array of questions
let decisions = [
  "Want to do the bad thing?"
];

// Making an array of narration descriptions
let narrations = [
  "Your goal.",
  "The first stunt.",
  "The second stunt.",
  "The third stunt.",
  "Epilogue.",
  "You did a bad thing."
];

// Background change template
// $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundRed.png")');

// Making an array of webpage backgrounds
let webpageBackgrounds;

// Adding variables for the different scores
let subscriberNumber = 0;
let monthNumber = 1;

// Activating various functions once the page loads
function setupDocument() {

  // Score updates every half second
  setInterval(updateScore, 500);

  firstDialog();

}

// updateScore
//
// Correctly represents the various in-game scores
function updateScore() {
  $('#monthScore').text(monthNumber);
  $('#subscriberScore').text(subscriberNumber);
}


// firstDialog()
//
// Generates a dialog box that will start a chain of dialogs
function firstDialog() {
  // Making a variable for a dialog that appears in a div
  let $dialog = $('<div></div>').attr('title', 'Important!');
  // Appending dialog that contains a narration index in a p tag in the div
  $dialog.append(`<p>${narrations[0]}</p>`);
  // The div is added to the body
  $('body').append($dialog);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "Ok": function() {
        // The subscriber and month number increases
        subscriberNumber += 10000;
        monthNumber += 1;
        // Another dialog function gets called
        fingerDialog();
        // The current dialog closes
        $(this).dialog('close');
      }
    }
  });

  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for every created dialog
  narrateDialog(narrations[0]);
}

// fingerDialog
//
// Dialog related to the "Finger Family" subject
function fingerDialog() {
  // Making a variable for a dialog that appears in a div
  let $dialog = $('<div></div>').attr('title', 'Important!');
  // Appending dialog that contains a narration index in a p tag in the div
  $dialog.append(`<p>${narrations[1]}</p>`);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "What can I do?": function() {
        // Another dialog function gets called
        fingerChoice();
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narrations[1]);
}

// fingerChoice
//
// Dialog related to the "Finger Family" subject
function fingerChoice() {
  // Making a variable for a dialog that appears in a div
  let $dialog = $('<div></div>').attr('title', 'Important!');
  // Appending dialog that contains a narration index in a p tag in the div
  $dialog.append(`<p>${decisions[0]}</p>`);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding Yes/No options using anonymous functions
    buttons: {
      "Yes": function() {
        // Another dialog function gets called
        fingerChoice();
        // The webpage background changes
        $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundRed.png")');
        // The subscriber number decreases
        subscriberNumber -= 8000;
        // The current dialog closes
         $(this).dialog('close');
      },
      "No": function() {
        // Another dialog function gets called
        // fingerChoice();
        // The subscriber and month number increases
        subscriberNumber += 20000;
        monthNumber += 1;
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  darkerNarration(decisions[0]);
}



// narrateDialog
//
// A voice says whatever is in the dialog box
// An argument is used in order for the voice to recognize the presented text
function narrateDialog(text) {
// Adding ResponsiveVoice
responsiveVoice.speak(text, "UK English Male");
}

// darkerNarration
//
// A harsher voice says whatever is in the dialog box
// An argument is used in order for the voice to recognize the presented text
function darkerNarration(text) {
  // Changing the pitch and rate of the voice using a variable
  let options = {
    rate: 0.4,
    pitch: 0.1
  }
  // Adding ResponsiveVoice
  responsiveVoice.speak(text, "UK English Male", options);
}

// preload()
//
// Loads the images for the canvas
function preload() {
  // Making a for loop to generate the story images
  for (let i = 1; i <= storyNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/story" + i + ".png";
    // Loading the images into the array
    storyImages.push(loadImage(filePath));
  }

  // Making a for loop to generate the bad ending images
  for (let i = 1; i <= badEndNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/badend" + i + ".png";
    // Loading the images into the array
    badEndImages.push(loadImage(filePath));
  }
}

// setup()
//
// Sets up the canvas at the start of the program
function setup() {
createCanvas(900, 500);
}

// draw()
//
// Calls images for every frame
function draw() {
  // Setting the first image
  image(storyImages[0], 0, 0, width, height);

  storyChange();
}

// storyChange()
//
// A p5 function that changes the current image in the canvas to another
// depending on the current subscriber number
function storyChange() {
  if (subscriberNumber === 10000) {
    image(storyImages[1], 0, 0, width, height);
  }
  else if (subscriberNumber === 2000) {
    image(badEndImages[0], 0, 0, width, height);
  }

}
