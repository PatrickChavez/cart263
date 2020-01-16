"use strict";

/********************************************************************

Assignment 1
Patrick Chavez-Nadarajah

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// The functions will be called when the page has loaded
window.onload = setup;

// setup()
//
// Makes it so pixels are painted by moving the mouse
function setup() {
  console.log("The page has loaded!");
  // Pixel Numbers
  let pixelNumber = 1000;
  // Generating a for loop to manage the pixels
  for (let i = 0; i < pixelNumber; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    document.body.appendChild(pixel);
    pixel.addEventListener('mouseover', paint);
    // Clicking a pixel will make it disappear
    pixel.addEventListener('click', remove);
  }
}

// paint()
//
// Allows a different pixel color to generate when the mouse is moved
function paint(e) {
  // Mapping the value to 1 to 255 and generating variables for red blue and green
  // The number 256 is given in order to have all 255 color options available
  let randomRed = Math.random() * 256;
  let randomBlue = Math.random() * 256;
  let randomGreen = Math.random() * 256;
  // Targeting the pixels
  let pixel = e.target;
  // The mouse will paint a different color each time
  pixel.style.backgroundColor = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;
  setTimeout(resetPixel, 1000, pixel);
}

// resetPixel()
//
// Reverts a colored pixel to black over time
function resetPixel(pixel) {
  pixel.style.backgroundColor = 'black';
}

// remove()
//
// "Removes" a pixel by making its opacity 0
function remove(e) {
  // Targeting the pixels
  let pixel = e.target;
  // Clicking will make a pixel white
  pixel.style.backgroundColor = `rgb(${0}, ${0}, ${0}, ${0})`;
}
