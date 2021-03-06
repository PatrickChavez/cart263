// Wheel
//
// A class that inherits from Item. The mouse is used in order to rotate the object.
class Wheel extends Item {
  constructor(x, y, image, width, height) {
    // Inheriting arguments from the Item class
    super(x, y, image);
    // Adding width and height to conform with the image file
    this.width = width;
    this.height = height;
  }

  // rotation()
  //
  // Makes the wheel spin using the mouse
  rotation() {
    push();
    // Angle is calculated via mouse position relative to half the canvas
    let wheelAngle = atan2(mouseY - height / 2, mouseX - width / 2);
    // Placing the wheel within the corners of the canvas
    translate(width / 2, height / 2);
    rotate(wheelAngle);
    // Displaying the wheel
    this.display();
    pop();
  }

  // display()
  //
  // Shows the wheel on the canvas
  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
  }
}
