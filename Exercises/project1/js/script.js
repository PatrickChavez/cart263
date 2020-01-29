"use strict";

/********************************************************************

Project 1
Patrick Chavez-Nadarajah

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

// The script will start once the webpage has loaded
$(document).ready(setup);

// Adding audio
let bgMusic = new Audio("assets/sounds/bgm_maoudamashii_8bit18.mp3");
let slashSFX = new Audio("assets/sounds/se_maoudamashii_retro11.mp3");

// Adding a variable to the enemies
let $enemy;

// Adding a variable for slain enemies
let enemiesSlain = 0;

// Adding a variable for the total number of enemies
let enemyTotal;

// Adding a variable for the interval time
let intervalTime = 1000;

// setup()
//
// Activates event handlers that correspond to their respective elements
function setup() {
  // Storing the enemy class in a variable
  $enemy = $(".enemy");
  console.log($enemy);
  // Adding a dialog window
  $("#dialog").dialog();
  // An enemy appears after a certain amount of time
  setInterval(addEnemy, intervalTime);
}


// addEnemy()
//
// Spawns another enemy after a certain amount of time has passed
function addEnemy() {
  console.log("Adding enemy");
  // Spawns another enemy
  let enemy = $('<div><img class="enemy"src="/assets/images/EnemyPlaceholder.png" alt="Enemy"></div>');
  enemy.addClass('enemy');
  $('body').append(enemy);
}
