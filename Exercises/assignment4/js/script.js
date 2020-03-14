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
  // Loading the data.json file
  $.getJSON("data/data.json")
    // Call the dataLoaded() function if the loading succeeds
    .done(dataLoaded)
    // Call the dataNotLoaded() function if the loading fails
    .fail(dataNotLoaded);
  // The page reloads if the user clicks on it
  $('html').on('click', reloadPage);
}

// dataLoaded()
//
// Loads a description using an argument and the JSON file
function dataLoaded(data) {
  // Making a console.log to check the definition of the data
  console.log(data);
  // Adding a variable to generate a random condiment by using a data object as the parameter
  // Console.logs will be placed whenever needed
  let randomCondiment = getRandomArrayElement(data.condiments);
  console.log(randomCondiment);
  // Maiking a variable for a verb
  let verb = "is";
  // Changing "is" to "are" if the condiment is in plural (the last letter ends in "s")
  // -1 is used in order for charAt() to arrive at the last letter and not the .length index
  if (randomCondiment.charAt(randomCondiment.length - 1) === "s") {
    verb = "are";
  }
  console.log(verb);
  // Adding a variable to generate a random cat name
  let randomCat = getRandomArrayElement(data.cats);
  console.log(randomCat);
  // Adding a variable to generate a random room
  let randomRoom = getRandomArrayElement(data.rooms);
  console.log(randomRoom);
  // Adding a variable to generate a random art movement
  let randomArtMovement = getRandomArrayElement(data.isms);
  console.log(randomArtMovement);
  // Adding a variable to generate a random flower
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
  // Adding the description to the HTML body using append()
  $('body').append(randomDescription);
}

// dataNotLoaded()
//
// Gives a console.error if the data is not loaded
function dataNotLoaded(request, text, error) {
  console.error(error);
}

// getRandomArrayElement()
//
// Chooses a random element from an array using an argument and returns that result
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
