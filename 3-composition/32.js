import _ from 'lodash/fp';

const maleify = (name) => `Mr. ${name}`;
const femaleify = _.memoize(function (name) {
  console.log(`(Computing the female title for ${name}...)`);
  return `Ms. ${name}`;
});
const greet = (person) => `Hi ${person}`;
const formalGreet = (person) => `Welcome ${person}.`;

const greetFemale = _.pipe(femaleify, greet);
const formalGreetFemale = _.pipe(femaleify, greet);

console.log(greetFemale('Lisa'));
console.log(formalGreetFemale('Lisa'));
