"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

window.onload = setup;

function setup() {
  console.log(document);
  // Pixel Numbers
  let pixelNumber = 1000;
  for (let i = 0; i < pixelNumber; i++) {

    let pixel = document.createElement('div');
    pixel.setAttribute('class','pixel');
    document.body.appendChild(pixel);
    pixel.addEventListener('mouseover', paint);
  // console.log(pixelNumber[i]);
  }

}

function paint(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = 'white';
  setTimeout(resetPixel, 1000, pixel);
}

function resetPixel(pixel) {
  pixel.style.backgroundColor = 'black';
}
