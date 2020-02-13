"use strict";

/********************************************************************

Assignment 3
Patrick Chavez-Nadarajah

*********************************************************************/

$(document).ready(setup);

// Making a variable for the correct answer
let correctAnimal;

// Making an array for the answers
let answers = [];

// Adding annyang commands
let sayGiveUp = {
  'I give up': giveUp
};

let sayItAgain = {
  'Say it again': repeatName
};

// Creating a constant for the number of choices available
const NUM_OPTIONS = 4;

// Creating an array with various animals within
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

// setup()
//
// Fires off a new round and activates voice commands
function setup() {
  newRound();

  // Activating annyang
  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call


    // Add our commands to annyang
    annyang.addCommands(sayGiveUp);
    annyang.addCommands(sayItAgain);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
}

// addButton()
//
// Adds a button with an animal's name on the webpage
function addButton(label) {
  // Creating a guess class that will be added to the HTML body
  // Said class will contain an animal name due to the 'label' argument
  let $div = $('<div></div>');
  $div.addClass('guess');
  $div.text(label);
  $div.button();
  $div.appendTo('body');
  $div.on('click', handleGuess);
}

// handleGuess()
//
// The button reacts depending on whether it was the answer or not
function handleGuess() {
  console.log($(this).text(), correctAnimal);
  // If the answer is correct, then a new round starts
  if ($(this).text() === correctAnimal) {
    $('.guess').remove();
    setTimeout(newRound, 1000);
  }
  // If the answer is wrong, then the button shakes and
  // the correct animal is said again
  else {
    $(this).effect('shake');
    sayBackwards(correctAnimal);
  }
}

// newRound()
//
// Generates a set of buttons with a random animal for each
function newRound() {
  // Making the answers array empty in order for older elements to
  // disappear when new ones are created
  answers = [];
  // Generating a for loop in order to select a random element
  // and add it into a button
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }
  // The correct animal is said backwards and is chosen from
  // the above random elements
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  sayBackwards(correctAnimal);
}

// sayBackwards()
//
// A voice says a certain animal element backwards in a random rate and pitch
function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');
  let options = {
    rate: Math.random(),
    pitch: Math.random()
  }
  responsiveVoice.speak(backwardsText, "US English Male", options);
}

// giveUp()
//
// Calls the giveAnswer() function when the user asks for it
function giveUp() {
  // Adding a console.log to make sure the voice command works
  console.log("Don't give up!")
  // Making the correct answer reveal itself by checking the <div>
  let $div = $('div');
  $div.each(giveAnswer);
}

// giveAnswer()
//
// Highlights the correct answer and starts the game anew
function giveAnswer() {
  // console.log($(this).effect('shake'));
  if ($(this).text() === correctAnimal) {
    // The answer will shake
    $(this).effect('shake');
    // The guess class is removed after half a second
    setTimeout(removeGuess, 500);
    // A new round starts after a second
    setTimeout(newRound, 1000);
  }
}

// removeGuess()
//
// Removes the guess class when called for a round reset
function removeGuess() {
  // The guess class will be removed
  $('.guess').remove();
}

// repeatName()
//
// Makes the responsiveVoice say the correct answer again
// in a different rate and pitch
function repeatName() {
  console.log("Repeated!");
  sayBackwards(correctAnimal);
}
