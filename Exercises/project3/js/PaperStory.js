// PaperStory
//
// State extension that displays images and text related to the think action for the wheel
class PaperStory extends State {
  constructor() {
    super();
    // Keeping track of the array index
    this.scriptPosition = 0;
  }

  // draw()
  //
  // Shows the story sequence
  draw() {
    // The script appears in the textbox
    // The text is called here so that the program immediately calls for it and not when the mouse is clicked
    $('#textbox').text(gameScript.paperScript[this.scriptPosition]);
    // The image changes based on the script position
    if (this.scriptPosition === 0) {
      image(paperStoryImages[0], 0, 0, width, height);
    }
    else if (this.scriptPosition === 2) {
      image(paperStoryImages[1], 0, 0, width, height);
    }
    else if (this.scriptPosition === 3) {
      image(paperStoryImages[2], 0, 0, width, height);
    }
    else if (this.scriptPosition === 4) {
      image(paperStoryImages[3], 0, 0, width, height);
    }
    else if (this.scriptPosition === 5) {
      image(paperStoryImages[4], 0, 0, width, height);
    }
    else if (this.scriptPosition === 7) {
      image(paperStoryImages[5], 0, 0, width, height);
    }
    else if (this.scriptPosition === 9) {
      image(paperStoryImages[6], 0, 0, width, height);
    }
    else if (this.scriptPosition === 10) {
      image(paperStoryImages[7], 0, 0, width, height);
    }
    else if (this.scriptPosition === 12) {
      image(paperStoryImages[8], 0, 0, width, height);
    }
    else if (this.scriptPosition === 13) {
      image(paperStoryImages[9], 0, 0, width, height);
    }
    else if (this.scriptPosition === 14) {
      image(paperStoryImages[10], 0, 0, width, height);
    }
    else if (this.scriptPosition === 16) {
      image(paperStoryImages[11], 0, 0, width, height);
    }
    else if (this.scriptPosition === 18) {
      image(paperStoryImages[12], 0, 0, width, height);
    }
    else if (this.scriptPosition === 20) {
      image(paperStoryImages[13], 0, 0, width, height);
    }
    else if (this.scriptPosition === 21) {
      image(paperStoryImages[14], 0, 0, width, height);
    }
    else if (this.scriptPosition === 23) {
      image(paperStoryImages[15], 0, 0, width, height);
    }
    else if (this.scriptPosition === 24) {
      image(paperStoryImages[16], 0, 0, width, height);
    }
    else if (this.scriptPosition === 27) {
      image(paperStoryImages[17], 0, 0, width, height);
    }
  }

  // mousePressed()
  //
  //
  mousePressed() {
    // The dialog advances with each mouse click
    this.scriptPosition += 1;

    // The game proceeds to the hub screen once the script length is reached
    if (this.scriptPosition === gameScript.paperScript.length) {
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
