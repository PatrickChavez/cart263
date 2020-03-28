// PaperState
//
// Displays images and text related to the paper viewing
class PaperState extends State {
  constructor() {
    super();
  }

  // draw()
  //
  // Shows the paper
  draw() {
    // Displaying the background
    background(0);
    // Displaying the image
    image(paperImage, 180, 80, 300, 450);
    // Variants TO EXPAND
    if (paperStateCounter === 2) {
      image(paperImage2, 180, 80, 300, 450);
    }
    else if (paperStateCounter === 1) {
      image(paperImage3, 180, 80, 300, 450);
    }
  }

  // mousePressed()
  //
  //
  mousePressed() {

  }
}
