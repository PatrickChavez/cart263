"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
// Preparing a function that will start once the page has loaded
$(document).ready(setupDocument);

// Making an array of questions
let decisions = [
  "Want to do the bad thing?"
];

// Making an array of narration descriptions
let narration = [
  "Your goal.",
  "The first stunt.",
  "The second stunt.",
  "The third stunt.",
  "Epilogue."
];

// Background change template
$('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundRed.png")');

// Making an array of webpage backgrounds
let webpageBackgrounds;

// Adding variables for the different scores
let subscriberNumber = 0;
let monthNumber = 1;

// Activating various functions once the page loads
function setupDocument() {

  // Score updates every half second
  setInterval(updateScore, 500);

  addDialog();

}

// updateScore
//
// Correctly represents the various in-game scores
function updateScore() {
  $('#monthScore').text(monthNumber);
  $('#subscriberScore').text(subscriberNumber);
}


// addDialog()
//
// Generates a dialog box
function addDialog() {
  // Making a variable for a dialog that appears in a div
  let $dialog = $('<div></div>').attr('title', 'Important!');
  // A random question is chosen from an array
  let decision = decisions[Math.floor(Math.random() * decisions.length)];
  // Appending a dialog that contains a decision in a p tag in the div
  $dialog.append(`<p>${decision}</p>`);
  // The div is added to the body
  $('body').append($dialog);

  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding Yes/No options with anonymous functions
    buttons: {
      "Yes": function() {
        subscriberNumber += 1;
        updateScore();
        $(this).dialog('close');
        dialogTree();
      },
      "No": function() {
        monthNumber -= 1;
        updateScore();
        $(this).dialog('close');
      }
    }
  });

  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();

  // // Positioning the dialog box using offset()
  // // The parent method is used in order to prevent the text from within the dialog box to move
  // $dialog.parent().offset({
  //   top: 250,
  //   left: 950
  // });

  // Adding narration for every created dialog
  narrateDialog(decision);
}

// dialogTree
//
// Testing followup questions
function dialogTree() {
  let $dialog = $('<div></div>').attr('title', 'Follow up!');
  $dialog.append('<p>Whoa!</p>');
  $dialog.dialog({
    buttons: {
      "Whoa?": function() {
         $(this).dialog('close');
      }
    }
  });

  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for every created dialog
  narrateDialog(decisions[1]);
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

function setup() {
createCanvas(900, 500);
}

function draw() {
  background(0);

  storyChange();
}

// A p5 function that changes the current image in the canvas to another one
function storyChange() {
  if (subscriberNumber === 1) {
    background(0, 0, 255);
  }

}
