/*
 * SOLUTION to exercise 44.js in this file.
 *
 * Please try to actually solve it before looking
 * at the solution.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Ready?
 *
 */
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

// Solution:

function rectangleArea(height) {
  return function rectangleAreaGivenHeight(width) {
    const calcArea = () => height * width;
    return function getArea() {
      return calcArea();
    };
  }
}

const getArea = rectangleArea(3)(4);
console.log(getArea());
