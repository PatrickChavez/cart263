// WheelState
//
// Displays images and text related to the wheel viewing
class WheelState extends State {
  constructor() {
    super();
  }

  // draw()
  //
  // Shows the wheel and it's controls
  draw() {
    // Displaying the background
    image(wheelBackground, 0, 0);
    // Displaying the wheel and its handling
    wheelObject.rotation();
  }

  // mousePressed()
  //
  //
  mousePressed() {

  }
}
