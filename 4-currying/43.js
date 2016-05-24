// Curried function
function makeGreet(female) {
  return function greet(name) {
    return `Hi ${female ? 'Ms.' : 'Mr.'} ${name}!`;
  };
}

// VERSUS

// Class
class Greeter {
  constructor(female) {
    this.female = female;
  }

  greet(name) {
    return `Hi ${this.female ? 'Ms.' : 'Mr.'} ${name}!`;
  }
}

console.log(makeGreet(true)('Lisa'));
console.log((new Greeter(true)).greet('Lisa'));
