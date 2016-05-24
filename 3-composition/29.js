const maleify = (name) => `Mr. ${name}`;
const femaleify = (name) => `Ms. ${name}`;
const greet = (person) => `Hi ${person}`;

const composeLTR = (fn1, fn2) =>
  function (x) { return fn2(fn1(x)); };

const greetFemale = composeLTR(femaleify, greet);

console.log(greetFemale('Lisa'));
