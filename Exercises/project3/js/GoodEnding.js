// GoodEnding
//
// State extension that displays images and text related to the good ending
class GoodEnding extends State {
  constructor() {
    super();
    // Keeping track of the JSON goodEndingScript array index
    this.scriptPosition = 0;
  }

  // draw()
  //
  // Shows the story sequence
  draw() {
    // The script appears in the textbox
    // The text is called here so that the program immediately calls for it and not when the mouse is clicked
    $('#textbox').text(gameScript.goodEndingScript[this.scriptPosition]);
    // The image changes based on the script position
    if (this.scriptPosition === 0) {
      image(goodEndStoryImages[0], 0, 0, width, height);
    } else if (this.scriptPosition === 1) {
      image(goodEndStoryImages[1], 0, 0, width, height);
    } else if (this.scriptPosition === 2) {
      image(goodEndStoryImages[2], 0, 0, width, height);
    } else if (this.scriptPosition === 3) {
      image(goodEndStoryImages[3], 0, 0, width, height);
    } else if (this.scriptPosition === 4) {
      image(goodEndStoryImages[4], 0, 0, width, height);
    } else if (this.scriptPosition === 5) {
      image(goodEndStoryImages[5], 0, 0, width, height);
    } else if (this.scriptPosition === 7) {
      image(goodEndStoryImages[6], 0, 0, width, height);
    } else if (this.scriptPosition === 8) {
      image(goodEndStoryImages[7], 0, 0, width, height);
    } else if (this.scriptPosition === 11) {
      image(goodEndStoryImages[8], 0, 0, width, height);
    } else if (this.scriptPosition === 16) {
      image(goodEndStoryImages[9], 0, 0, width, height);
    } else if (this.scriptPosition === 19) {
      image(goodEndStoryImages[10], 0, 0, width, height);
    }
  }

  // mousePressed()
  //
  //
  mousePressed() {
    // The dialog advances with each mouse click
    this.scriptPosition += 1;
  }
}
