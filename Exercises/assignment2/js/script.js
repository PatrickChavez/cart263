"use strict";

$(document).ready(setup);

function setup() {
  setInterval(update, 500);
  $('span').on('click', spanClicked);
}

function update() {
  console.log("Update!");
  $('span').each(updateSpan);
}

function updateSpan() {
  console.log("Updating span!");
  let randomNumber = Math.random();
  if (randomNumber < 0.1) {
    $(this).removeClass("redacted");
    $(this).addClass("revealed");
  }
}

function spanClicked() {
  $(this).addClass("redacted");
  $(this).removeClass("revealed");
}

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/
