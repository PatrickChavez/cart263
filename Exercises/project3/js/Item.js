// Item
//
// A parent class representing an object that the player interacts with
class Item {
  // constructor
  //
  // Sets the item's properties (either default values or arguments)
  constructor(x, y, image, radius) {
    // Position
    this.x = x;
    this.y = y;
    // Appearance
    this.image = image;
    // Size
    this.radius = radius;
  }

  // display
  //
  // Shows an appropritate item on the canvas
  display() {
    push();
    // Centering image for precision
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
  }
}
