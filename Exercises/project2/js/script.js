"use strict";

/********************************************************************

Glory Seeker
Patrick Chavez-Nadarajah

Earn 100000 subscribers on YouTube in 5 months! Can you do it without
succumbing to stress?

Breakfast is ready by Yusuke Shimizu via DOVA-SYNDROME
https://dova-s.jp/bgm/play9398.html
https://oto-jam.com/

Nukiashisashiashi/抜き足差し足/Pull out Foot by Amacha Music Studio
https://amachamusic.chagasi.com/image_ayashii.html

Oswald font by Vernon Adams
https://www.fontsquirrel.com/fonts/oswald
https://fonts.google.com/specimen/Oswald

Dialog functions based on Pippin Barr's Endless Dialogs code
https://github.com/pippinbarr/cart263-2020/blob/master/course-information/course-schedule.md#week-4

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

// Making an array of decisions
let decisions = [
  "Do you want to create a stranger video in the hopes of gaining relevance through controversy? You could gain a new audience…",
  "How about making your content closer to reality? Perhaps you should make the subject about the deceased. The person in question doesn’t have to be dead at the moment…",
  "Why not push them to work harder? The ends justify the means after all. If anyone starts complaining, you could always pay them more or blackmail them to continue working for you…"
];

// Making an array of plot descriptions
let narrations = [
  "You want to reach 100000 subscribers on YouTube and earn a silver play button to show off to your loved ones how awesome and hardworking you are. The sweet ad revenue is also a nice bonus. A 5-month deadline to reach your goal is set. You figure making content geared towards kids would be the best place to start.",
  "You decide to start with the ever-popular Finger Family set of videos. Despite their crude and simple look, your content managed to get you 10000 subscribers in a month! However, your videos have been getting less and less views as time goes on…",
  "You settle for tackling the spooky 3AM challenges that have taken the platform by storm. Fortunately, this different approach allowed you to obtain more subscribers than ever before! Despite this rousing success, your subscriber count hasn’t seen much improvement in the last couple of days.",
  "You decide to do-away with the 3AM challenge and focus on the bizarre world of Spiderman and Elsa videos. Your subscriber count has reached a whopping 40000 units, but your deadline of reaching 100000 subscribers in five months is fast approaching! What’s more, the actors you hired to make the videos, both young and old, are becoming weary of performing near-constantly…",
  "In the end, you could not reach your goal. Despite this, you’ve learned that success doesn’t come quickly and that you still enjoy making videos. You decide to continue making the content you’re used to while also changing it up every now and then. A day will come when you will be able to show everybody that silver play button…"
];

// Making an array of bad ending narrations
let badEndArray = [
  "Your horror-themed Finger Family video did little to appease the crowd and no doubt traumatized a lot of children. You did become relevant through the controversy though: popular YouTubers are all talking about how callous you are for putting this kind of content in a kid’s channel. Unfortunately, this exposure only made you unpopular and your subscriber count dropped as a result.",
  "Your little stunt was deemed to be in poor taste by the majority of the community. There is a chance that children will be influenced by your video and make content about calling their deceased relatives. What’s more, YouTube has stepped in and demonetized your channel following the controversy. With little means to make a comeback, you decide to quit making videos.",
  "Numerous actors that you worked with have decided to speak out and denounce you for your unpleasant working conditions. Many were appalled with how you would make your performers work for up to 10 hours with little breaks. Not even the child actors were exempt from this harsh regiment. In order to quell the furious masses, you decided to make an apology video explaining your side of the story. Needless to say, no one took your side."
];

// Adding variables for the different scores
let subscriberNumber = 0;
let monthNumber = 1;

// Adding variables for music and sound effects
let mainTheme = new Audio("assets/sounds/Breakfast_is_ready.mp3");
let badEndTheme = new Audio("assets/sounds/nukiashisashiashi.mp3");

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
  // The bad ending music stops
  badEndTheme.pause();
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

// scenarioDialog
//
// Dialog related to the various YouTube subjects the game tackles
// Arguments are used in order to call narrations and functions
function scenarioDialog(narrationIndex, buttonText, buttonFunction) {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(narrations[narrationIndex]);
  // Creating a variable containing an empty dialog object that consists of its buttons
  let dialogButtons = {};
  // Creating the buttons containing anonymous functions
  dialogButtons[buttonText] = function() {
    // Another dialog function is called
    buttonFunction();
    // The current dialog box closes
    $(this).dialog('close');
  }
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    buttons: dialogButtons
  });
  // Positioning the dialog box using offset()
  // The parent method is used in order to prevent the text from within the dialog box to move
  $dialog.parent().offset({
    top: 150,
    left: 950
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narrations[narrationIndex], 1, 1);
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
  // Positioning the dialog box using offset()
  // The parent method is used in order to prevent the text from within the dialog box to move
  $dialog.parent().offset({
    top: 150,
    left: 950
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narration, 1, 1);
  // The bad ending music plays
  // The volume is lowered in order to prevent ResponsiveVoice from being drowned out
  badEndTheme.volume = 0.4;
  badEndTheme.currentTime = 0;
  badEndTheme.play();
}

// firstDialog()
//
// Generates a dialog box that will start the music and a chain of dialogs
function firstDialog() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(narrations[0]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding an option using an anonymous function
    buttons: {
      "Let’s get to it!": function() {
        // The subscriber and month number increases
        changeScore(10000, 1);
        // Another dialog function is called
        scenarioDialog(1, "I have to stay fresh…", fingerChoice);
        // The current dialog closes
        $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(narrations[0], 1, 1);
  // The main theme plays at the time when it becomes dynamic
  // The volume is lowered in order to prevent ResponsiveVoice from being drowned out
  mainTheme.volume = 0.2;
  mainTheme.currentTime = 39;
  mainTheme.loop = true;
  mainTheme.play();
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
        badEnding(badEndArray[0]);
        // The webpage background changes
        $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundRed.png")');
        // The subscriber number is halved
        subscriberNumber /= 2;
        // The current dialog closes
         $(this).dialog('close');
      },
      "No": function() {
        // Another dialog function is called
        scenarioDialog(2, "There has to be a better approach to this…", ghostChoice);
        // The subscriber and month number increases
        changeScore(14000, 1);
        // The music resumes
        mainTheme.play();
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(decisions[0], 0.6, 0.1);
  // The music stops
  mainTheme.pause();
}

// ghostChoice()
//
// An important decision related to the "3am Videos" subject
function ghostChoice() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(decisions[1]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding Yes/No options using anonymous functions
    buttons: {
      "Yes": function() {
        // Another dialog function is called
        badEnding(badEndArray[1]);
        // The webpage background changes
        $('body').css('background-image', 'url("https://patrickchavez.github.io/cart263/Exercises/project2/assets/images/ComputerBackgroundRed.png")');
        // The subscriber number is halved
        subscriberNumber /= 2;
        // The current dialog closes
         $(this).dialog('close');
      },
      "No": function() {
        // Another dialog function is called
        scenarioDialog(3, "Maybe I should give them a break…", elsaChoice);
        // The subscriber and month number increases
        changeScore(16000, 1);
        // The music resumes
        mainTheme.play();
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(decisions[1], 0.6, 0.1);
  // The music stops
  mainTheme.pause();
}

// elsaChoice()
//
// An important decision related to the "ElsaGate" subject
function elsaChoice() {
  // Making a variable for the dialog that appears in the div
  let $dialog = createDialog(decisions[2]);
  // Turning the $dialog variable into an actual dialog window
  $dialog.dialog({
    // Adding Yes/No options using anonymous functions
    buttons: {
      "Yes": function() {
        // Another dialog function is called
        badEnding(badEndArray[2]);
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
        // The music resumes
        mainTheme.play();
        // The current dialog closes
         $(this).dialog('close');
      }
    }
  });
  // Removing the "close" corner box
  $('.ui-dialog-titlebar-close').remove();
  // Adding narration for the dialog
  narrateDialog(decisions[2], 0.6, 0.1);
  // The music stops
  mainTheme.pause();
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
      "I will reach my goal someday!": function() {
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
