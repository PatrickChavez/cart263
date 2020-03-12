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

  // The page reloads if the user clicks on it
  $('html').on('click', reloadPage);
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

  // Adding a variable for the determiners of the JSON data ("a" or "an")
  let catDeterminer = "a";
  let roomDeterminer = "a";
  let artDeterminer = "a";
  // Generating a for loop to cycle through the vowels
  for (let i = 0; i < vowels.length; i++) {
    // Adding a console.log to check if the for loop is working
    console.log(vowels[i]);
    // Adding an if statement that changes "a" to "an" depending on the following noun
    // .toLowerCase() is used for cat names in order for them to match the lowercase vowels
    if (randomCat.toLowerCase().charAt(0) === vowels[i]) {
      catDeterminer = "an";
    }
    // Making if statements for the rest of the necessary JSON data
    if (randomRoom.charAt(0) === vowels[i]) {
      roomDeterminer = "an";
    }
    if (randomArtMovement.charAt(0) === vowels[i]) {
      artDeterminer = "an";
    }
  }

  // Generating a description using the above variables and template literals
  let randomDescription = `${randomCondiment} ${verb} like ${catDeterminer} ${randomCat} in ${roomDeterminer} ${randomRoom} making ${artDeterminer} ${randomArtMovement} piece resembling a group of ${randomFlower}.`;
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

// reloadPage()
//
// Reloads the page when the user clicks on it
function reloadPage() {
  location.reload();
}
