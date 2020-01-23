/********************************************************************

Assignment 2
Patrick Chavez-Nadarajah

*********************************************************************/
"use strict";

// The script will start once the webpage has loaded
$(document).ready(setup);

// Setting the interval time for the setup function
let intervalTime = 500;

// Setting the probability rate for the random number generator
let randomProbability = 0.1;

// Adding a variable for tracking found secrets
let secretsFound;

// Adding a variable for tracking the total number of secrets
let secretsTotal;

// Seeing the total number of secrets
console.log($('.secret').length);

// setup()
//
// Activates various functions upon loading the webpage
function setup() {
  // Calling the update() function on a set interval and calls
  setInterval(update, intervalTime);
  // Calling the spanClicked() function when clicking certain blocks of text
  $('span').on('click', spanClicked);
}

// update()
//
// A function to call all "spans" during a set interval
function update() {
  console.log("Update!");
  $('span').each(updateSpan);
}

// updateSpan()
//
// Checks each "span" on the webpage and changes its nature
function updateSpan() {
  console.log("Updating span!");
  // A random number will be generated that when reached, will
  // reveal a redacted part of text
  let randomNumber = Math.random();
  if (randomNumber < randomProbability) {
    $(this).removeClass("redacted");
    $(this).addClass("revealed");
  }
}

// spanClicked
//
// Makes it so that revealed texts becomes redacted when clicked
function spanClicked() {
  $(this).addClass("redacted");
  $(this).removeClass("revealed");
}
