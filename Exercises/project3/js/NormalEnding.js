// NormalEnding
//
// State extension that displays images and text related to the normal ending
class NormalEnding extends State {
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
    $('#textbox').text(gameScript.normalEndingScript[this.scriptPosition]);
    // The image changes based on the script position
    if (this.scriptPosition === 0) {
      image(normalEndStoryImages[0], 0, 0, width, height);
    }
    else if (this.scriptPosition === 1) {
      image(normalEndStoryImages[1], 0, 0, width, height);
    }
    else if (this.scriptPosition === 2) {
      image(normalEndStoryImages[2], 0, 0, width, height);
    }
    else if (this.scriptPosition === 3) {
      image(normalEndStoryImages[3], 0, 0, width, height);
    }
    else if (this.scriptPosition === 4) {
      image(normalEndStoryImages[4], 0, 0, width, height);
    }
    else if (this.scriptPosition === 5) {
      image(normalEndStoryImages[5], 0, 0, width, height);
    }
    else if (this.scriptPosition === 7) {
      image(normalEndStoryImages[6], 0, 0, width, height);
    }
    else if (this.scriptPosition === 8) {
      image(normalEndStoryImages[7], 0, 0, width, height);
    }
    else if (this.scriptPosition === 11) {
      image(normalEndStoryImages[8], 0, 0, width, height);
    }
    else if (this.scriptPosition === 12) {
      image(normalEndStoryImages[9], 0, 0, width, height);
    }
    else if (this.scriptPosition === 15) {
      image(normalEndStoryImages[10], 0, 0, width, height);
    }
    else if (this.scriptPosition === 17) {
      image(normalEndStoryImages[11], 0, 0, width, height);
    }
    else if (this.scriptPosition === 18) {
      image(normalEndStoryImages[12], 0, 0, width, height);
    }
    else if (this.scriptPosition === 20) {
      image(normalEndStoryImages[13], 0, 0, width, height);
    }
    else if (this.scriptPosition === 21) {
      image(normalEndStoryImages[14], 0, 0, width, height);
    }
  }

  // mousePressed()
  //
  //
  mousePressed() {
    // The dialog advances with each mouse click
    this.scriptPosition += 1;

    // The game proceeds to the hub screen once the script length is reached
    if (this.scriptPosition === gameScript.normalEndingScript.length) {
      // The game/webpage resets
      location.reload();
      // A brief message appears
      $('#textbox').text("Reset!");
    }
  }
}
