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
  "Yes for +1P",
  "No for -1M"
];

// Adding variables for the different scores
let popularityNumber = 0;
let moralityNumber = 5;

// Activating various functions once the page loads
function setupDocument() {

  // Score updates every half second
  setInterval(updateScore, 500);

  // setInterval(addDialog, 2000);

  addDialog();

  setInterval(backgroundChange, 500);
}

// updateScore
//
// Correctly represents the various in-game scores
function updateScore() {
  $('#moralityScore').text(moralityNumber);
  $('#popularityScore').text(popularityNumber);
}

// addDialog()
//
// Spawns a random dialog box
function addDialog() {
  // Making a variable for a dialog that appears in a div
  let $dialog = $('<div></div>').attr('title', 'Important!');
  // A random question is chosen from an array
  let decision = decisions[Math.floor(Math.random() * decisions.length)];
  // Appending a dialog that contains a decision in a p tag in the div
  $dialog.append(`<p>${decision}</p>`);
  // The div is added to the body
  $('body').append($dialog);

  // Removing the "close" corner box
  $('ui-dialog-titlebar-close').remove();

  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding Yes/No options with anonymous functions
    buttons: {
      "Yes": function() {
        popularityNumber += 1;
        updateScore();
        $(this).dialog('close');
        dialogTree();
      },
      "No": function() {
        moralityNumber -= 1;
        updateScore();
        $(this).dialog('close');
      }
    }
  });

  // Positioning the dialog box using offset()
  // The parent method is used in order to prevent the text from within the dialog box to move
  $dialog.parent().offset({
    top: 250,
    left: 950
  });

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
  $('ui-dialog-titlebar-close').remove();
  // Adding narration for every created dialog
  narrateDialog("Whoa!");
  }

// backgroundChange
//
// The background image changes once morality drops to a certain number
function backgroundChange() {
  if (moralityNumber <= 4) {
    $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/clown.png")');
  }
}

// narrateDialog
//
// A voice says whatever is in the dialog box
// An argument is used in order for the voice to recognize the presented text
function narrateDialog(text) {
// Adding ResponsiveVoice
responsiveVoice.speak(text);
}



function setup() {
createCanvas(900, 450);
}

function draw() {
  background(0);

}
