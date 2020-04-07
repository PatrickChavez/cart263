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
    // Displaying the normal state of the paper
    image(paperImageNormal, 0, 0);
    // The paper shows an ingredient
    if (paperStateCounter === 2) {
      image(paperImageGood, 0, 0);
    }
    // Else a message says nothing happened
    else if (paperStateCounter === 1) {
      image(paperImageBad, 0, 0);
    }
  }

  // mousePressed()
  //
  //
  mousePressed() {

  }
}
