const maleify = (name) => `Mr. ${name}`;
const femaleify = (name) => `Ms. ${name}`;
const greet = (person) => `Hi ${person}`;

const composeLTR = (fn1, fn2) => x => fn2(fn1(x));
const composeRTL = (fn1, fn2) => x => fn1(fn2(x));

const greetFemale = composeLTR(femaleify, greet);
const weirdGreet = composeRTL(femaleify, greet);

console.log(greetFemale('Lisa'));
console.log(weirdGreet('Lisa'));
