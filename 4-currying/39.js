import _ from 'lodash/fp';

function greet(name, female) {
  return `Hi ${female ? 'Ms.' : 'Mr.'} ${name}!`;
}

// make this function by reusing `greet` with currying
// You may need to change/fix somethings elsewhere.
const greetFemale = // ?

console.log(greetFemale('Lisa'));
