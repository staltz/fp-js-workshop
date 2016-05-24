import _ from 'lodash/fp';

const maleify = (name) => `Mr. ${name}`;
const femaleify = (name) => `Ms. ${name}`;
const greet = (person) => `Hi ${person}`;

// const composeLTR = _.pipe;
// const composeRTL = _.compose;

const greetFemale = _.pipe(femaleify, greet);
const weirdGreet = _.compose(femaleify, greet);

console.log(greetFemale('Lisa'));
console.log(weirdGreet('Lisa'));
