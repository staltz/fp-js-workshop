// Given this class...
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const rect = new Rectangle(3, 4);
console.log(rect.getArea());

// Create a function with closures that achieves the same goals.
// No multiple-argument functions allowed!
// Essentially, we want to get rid of classes and `this`.
