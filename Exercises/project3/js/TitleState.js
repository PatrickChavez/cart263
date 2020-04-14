// TitleState
//
// Displays images and text related to the title screen and game intro
class TitleState extends State {
  constructor() {
    super();
    // Keeping track of the JSON introScript array index
    this.scriptPosition = 0;
  }

  // draw()
  //
  // Shows the intro images and text
  draw() {
    // The script appears in the textbox
    // The text is called here so that the program immediately calls for it and not when the mouse is clicked
    $('#textbox').text(gameScript.introScript[this.scriptPosition]);
    // The image changes based on the script position
    if (this.scriptPosition === 0) {
      image(introImages[0], 0, 0, width, height);
    } else if (this.scriptPosition === 1) {
      image(introImages[1], 0, 0, width, height);
    } else if (this.scriptPosition === 3) {
      image(introImages[2], 0, 0, width, height);
    } else if (this.scriptPosition === 4) {
      image(introImages[3], 0, 0, width, height);
    } else if (this.scriptPosition === 7) {
      image(introImages[4], 0, 0, width, height);
    } else if (this.scriptPosition === 8) {
      image(introImages[5], 0, 0, width, height);
    } else if (this.scriptPosition === 9) {
      image(introImages[6], 0, 0, width, height);
    } else if (this.scriptPosition === 10) {
      image(introImages[7], 0, 0, width, height);
    } else if (this.scriptPosition === 13) {
      image(introImages[8], 0, 0, width, height);
    } else if (this.scriptPosition === 15) {
      image(introImages[9], 0, 0, width, height);
    }
  }

  // mousePressed()
  //
  // Advances through the game text
  mousePressed() {
    // The dialog advances with each mouse click
    this.scriptPosition += 1;
    // The game proceeds to the hub screen once the script length is reached
    if (this.scriptPosition === gameScript.introScript.length) {
      currentState = hubState;
      // Displaying the menu
      $("#menu").css("opacity", 1);
      // The music changes
      stateMusic();
      // The text changes
      stateText();
      // The script position resets
      this.scriptPosition = 0;
    }
  }
}
