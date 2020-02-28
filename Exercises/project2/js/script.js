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

// Making an array for the good endings and their number
let goodEndImages = [];
let goodEndNumber = 2;

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

  // The score updates every half second
  setInterval(updateScore, 500);

  // The first dialog kickstarts the dialog tree
  firstDialog();
}

// updateScore()
//
// Correctly represents the various in-game scores
function updateScore() {
  $('#monthScore').text(monthNumber);
  $('#subscriberScore').text(subscriberNumber);
}

// changeScore()
//
// Changes the value of the subscriber and month score using arguments
function changeScore(subIncrease, monthIncrease) {
  subscriberNumber += subIncrease;
  monthNumber += monthIncrease;
}

// resetGame
//
// Sends the player back to the beginning of the game
function resetGame() {
  // The subscriber and month numbers are reset
  subscriberNumber = 0;
  monthNumber = 1;
  // The webpage background returns to normal
  $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundPurple.png")');
  // The firstDialog() function is called
  firstDialog();
}

// createDialog()
//
// Stores the creation of dialog into a function for ease of access
function createDialog(dialogText) {
  // Making a variable for a dialog that appears in a div
  let $dialog = $('<div></div>').attr('title', 'Notice!');
  // Appending dialog that the argument uses in a p tag in the div
  $dialog.append(`<p>${dialogText}</p>`);
  // The div is added to the body
  $('body').append($dialog);
  // The value of the dialog variable is returned
  return $dialog;
}

// narrateDialog()
//
// A voice says whatever is in the dialog box
// An argument is used in order for the voice to recognize the presented text
// and change its rate and pitch
function narrateDialog(text, voiceRate, voicePitch) {
  // Changing the pitch and rate of the voice using arguments
  responsiveVoice.speak(text, "UK English Male", {
    rate: voiceRate,
    pitch: voicePitch
  });
}

// badEnding
//
// A bad ending scenario that resets the game and can change with arguments
function badEnding(narration) {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(narration);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "Retry": function() {
        // The game resets
        resetGame();
        // The current dialog closes
        $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narration, 1, 1);
}

// firstDialog()
//
// Generates a dialog box that will start a chain of dialogs
function firstDialog() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(narrations[0]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "Ok": function() {
        // The subscriber and month number increases
        changeScore(10000, 1);
        // Another dialog function is called
        fingerDialog();
        // The current dialog closes
        $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narrations[0], 1, 1);
}

// fingerDialog
//
// Dialog related to the "Finger Family" subject
function fingerDialog() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(narrations[1]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "What can I do?": function() {
        // Another dialog function is called
        fingerChoice();
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narrations[1], 1, 1);
}

// fingerChoice
//
// An important decision related to the "Finger Family" subject
function fingerChoice() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(decisions[0]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding Yes/No options using anonymous functions
    buttons: {
      "Yes": function() {
        // Another dialog function is called
        badEnding(narrations[5]);
        // The webpage background changes
        $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundRed.png")');
        // The subscriber number is halved
        subscriberNumber /= 2;
        // The current dialog closes
         $(this).dialog('close');
      },
      "No": function() {
        // Another dialog function is called
        ghostDialog();
        // The subscriber and month number increases
        changeScore(14000, 1);
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(decisions[0], 0.4, 0.1);
}


// ghostDialog()
//
// Dialog related to the "3am Videos" subject
function ghostDialog() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(narrations[2]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "Is there more to it?": function() {
        // Another dialog function is called
        ghostChoice();
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narrations[2], 1, 1);
}

// ghostChoice()
//
// An important decision related to the "3am Videos" subject
function ghostChoice() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(decisions[0]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding Yes/No options using anonymous functions
    buttons: {
      "Yes": function() {
        // Another dialog function is called
        badEnding(narrations[5]);
        // The webpage background changes
        $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundRed.png")');
        // The subscriber number is halved
        subscriberNumber /= 2;
        // The current dialog closes
         $(this).dialog('close');
      },
      "No": function() {
        // Another dialog function is called
        elsaGateDialog();
        // The subscriber and month number increases
        changeScore(16000, 1);
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(decisions[0], 0.4, 0.1);
}

// elsaGateDialog()
//
// Dialog related to the "ElsaGate" subject
function elsaGateDialog() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(narrations[3]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "We have to try harder": function() {
        // Another dialog function is called
        elsaChoice();
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narrations[3], 1, 1);
}

// elsaChoice()
//
// An important decision related to the "ElsaGate" subject
function elsaChoice() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(decisions[0]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding Yes/No options using anonymous functions
    buttons: {
      "Yes": function() {
        // Another dialog function is called
        badEnding(narrations[5]);
        // The webpage background changes
        $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundRed.png")');
        // The subscriber number is halved
        subscriberNumber /= 2;
        // The current dialog closes
         $(this).dialog('close');
      },
      "No": function() {
        // Another dialog function is called
        endingDialog();
        // The webpage background changes
        $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundBlue.png")');
        // The subscriber and month number increases
        changeScore(10000, 1);
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(decisions[0], 0.4, 0.1);
}

// endingDialog()
//
// Dialog related to the "ElsaGate" subject
function endingDialog() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(narrations[4]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "I'm going to push forward": function() {
        // The subscriber number increases
        changeScore(5000, 0);
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narrations[4], 1, 1);
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

  // Making a for loop to generate the good ending images
  for (let i = 1; i <= goodEndNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/goodend" + i + ".png";
    // Loading the images into the array
    goodEndImages.push(loadImage(filePath));
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
  // The "Finger Family" is shown
  if (subscriberNumber === 10000) {
    image(storyImages[1], 0, 0, width, height);
  }
  // The "Skull Family" is shown
  else if (subscriberNumber === 5000) {
    image(badEndImages[0], 0, 0, width, height);
  }
  // The "3am Scene" is shown
  else if (subscriberNumber === 24000) {
    image(storyImages[2], 0, 0, width, height);
  }
  // The "Dark 3am Scene" is shown
  else if (subscriberNumber === 12000) {
    image(badEndImages[1], 0, 0, width, height);
  }
  // The "Wholesome ElsaGate Scenario" is shown
  else if (subscriberNumber === 40000) {
    image(storyImages[3], 0, 0, width, height);
  }
  // The "Apology Video" is shown
  else if (subscriberNumber === 20000) {
    image(badEndImages[2], 0, 0, width, height);
  }
  // The first ending image is shown
  else if (subscriberNumber === 50000) {
    image(goodEndImages[0], 0, 0, width, height);
  }
  // The second ending image is shown
  else if (subscriberNumber === 55000) {
    image(goodEndImages[1], 0, 0, width, height);
  }
  // The player's room is shown otherwise
  else {
    image(storyImages[0], 0, 0, width, height);
  }

}
