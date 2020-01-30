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
  // Storing the enemy class in a variable so that it may be used
  // universally in the script
  $enemy = $(".enemy");

  // Adding a dialog window containing the game's instructions
  $("#dialog").dialog();

  // An enemy appears after a certain amount of time
  setInterval(addEnemy, intervalTime);
}

// updateEnemy
//
// Calls all enemy classes in order to refresh the total number count
// function updateEnemy() {
//   $enemy.each($enemy.length);
// }

// addEnemy()
//
// Spawns another enemy after a certain amount of time has passed
function addEnemy() {
  console.log("Adding enemy");
  // Spawns another enemy
  let enemy = $('<div><img class="enemy"src="/assets/images/EnemyPlaceholder.png" alt="Enemy"></div>');
  // enemy.addClass('enemy');
  $('body').append(enemy);
  // The total enemy text reflects the number of actual enemies present
  enemyTotal = $(".enemy").length; // Variable doesn't work?
  $("#totalEnemies").text(enemyTotal);
}
