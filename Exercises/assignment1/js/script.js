"use strict";

/********************************************************************

Assignment 1
Patrick Chavez-Nadarajah

*********************************************************************/

// The functions will be called when the webpage has loaded
window.onload = setup;

// Adding the global variable for rotation
let rotation = 0;

// setup()
//
// Makes it so pixels are painted by moving the mouse
function setup() {
  // Console.log to check if the page has loaded
  console.log("The page has loaded!");
  // Adding the 'keydown' event listener for rotation
  document.addEventListener('keydown', rotate);
  // Generating a variable for the pixel numbers
  let pixelNumber = 1000;
  // Generating a for loop to manage the pixels
  for (let i = 0; i < pixelNumber; i++) {
    // Creating the pixel 'div', setting its class and adding
    // it to the page's body
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
  // Activating the style using template literals and expressions
  pixel.style.backgroundColor = `rgb(${randomRed}, ${randomBlue}, ${randomGreen})`;
  // The pixels will turn black after 1 second / 1000 milliseconds
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
  // Activating the style using template literals and expressions
  pixel.style.backgroundColor = `rgb(${0}, ${0}, ${0}, ${0})`;
}

// rotate()
//
// Rotates onscreen pixels by 1 degree depending on the key pressed
// using the rotation variable
function rotate(e) {
  // Targetting the document to rotate the webpage
  let document = e.target;
  // The right arrow key rotates clockwise
  if (e.keyCode === 39) {
    // The rotation increases by 1 every time the key is pressed
    rotation += 1;
    // Activating the transform style property using template literals
    document.style.transform = `rotate(${rotation}deg)`;
    // Console logs to keep track of rotation
    console.log("Right press!");
    console.log("Rotation is currently " + rotation);
  }
  // The left arrow key rotates counter-clockwise
  else if (e.keyCode === 37) {
    // The rotation decreases by 1 every time the key is pressed
    rotation -= 1;
    // Activating the transform style property using template literals
    document.style.transform = `rotate(${rotation}deg)`;
    // Console logs to keep track of rotation
    console.log("Left press!");
    console.log("Rotation is currently " + rotation);
  }
}
