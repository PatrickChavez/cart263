// ExperimentState
//
// Displays images and text related to the experiment viewing
class ExperimentState extends State {
  constructor() {
    super();
  }

  // draw()
  //
  // Shows the experimentation image and the text parser
  draw() {
    // Displaying the image
    image(experimentImage, 0, 0, width, height);
  }
}
