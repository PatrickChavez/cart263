"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);


function setup() {
  $.getJSON("data/data.json")
    .done(dataLoaded)
    .fail(dataNotLoaded);

}

function dataLoaded(data) {
  console.log(data);

  let randomCondiment = getRandomArrayElement(data.condiments);
  console.log(randomCondiment);

  let verb = "is";
  // -1 is used in order for charAt() to arrive at the last letter and not the .length
  if (randomCondiment.charAt(randomCondiment.length - 1) === "s") {
    verb = "are";
  }
  console.log(verb);

  let randomCat = getRandomArrayElement(data.cats);
  console.log(randomCat);

  let randomRoom = getRandomArrayElement(data.rooms);
  console.log(randomRoom);

  // Adding a variable to generate a random art movement
  let randomArtMovement = getRandomArrayElement(data.isms);
  console.log(randomArtMovement);

  // Adding a variable to generate a random art movement
  let randomFlower = getRandomArrayElement(data.flowers);
  console.log(randomFlower);

  let randomDescription = `${randomCondiment} ${verb} like a ${randomCat} in a ${randomRoom} making a ${randomArtMovement} piece resembling a ${randomFlower}.`;
  $('body').append(randomDescription);

}

function dataNotLoaded(request, text, error) {
  console.error(error);
}

function getRandomArrayElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
