"use strict";

/********************************************************************

Assignment 4
Patrick Chavez-Nadarajah

JSON data from corpora:
https://github.com/dariusk/corpora/tree/master/data

*********************************************************************/
// The setup function will run one the webpage has loaded
$(document).ready(setup);

// Adding an array for vowels
let vowels = ["a", "e", "i", "o", "u"];

// setup()
//
// The function will call various functions once the webpage has loaded
function setup() {
  $.getJSON("data/data.json")
    .done(dataLoaded)
    .fail(dataNotLoaded);
}

// dataLoaded()
//
//
function dataLoaded(data) {
  console.log(data);

  let randomCondiment = getRandomArrayElement(data.condiments);
  console.log(randomCondiment);

  let verb = "is";
  // -1 is used in order for charAt() to arrive at the last letter and not the .length index
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

  // Adding a variable for the determiner ("a" or "an")
  let determiner = "a";
  console.log(determiner);

  // Generating a for loop to cycle through the vowels
  for (let i = 0; i < vowels.length; i++) {
    // Adding a console.log to check if the for loop is working
    console.log(vowels[i]);
    // Adding an if statement that changes "a" to "an" depending on the following noun
    if (randomCat.charAt(0) === vowels[i]) {
      determiner = "an";
    }
    console.log(randomCat.length);
  }

  // Generating a description using the above variables
  let randomDescription = `${randomCondiment} ${verb} like ${determiner} ${randomCat} in a ${randomRoom} making a ${randomArtMovement} piece resembling a ${randomFlower}.`;
  $('body').append(randomDescription);

}

// dataNotLoaded()
//
//
function dataNotLoaded(request, text, error) {
  console.error(error);
}

// getRandomArrayElement()
//
//
function getRandomArrayElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
