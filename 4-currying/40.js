import _ from 'lodash/fp';

function greet(female, name) {
  return `Hi ${female ? 'Ms.' : 'Mr.'} ${name}!`;
}

const greetFemale = _.curry(greet)(true);

function greetLisa() {
  return greetFemale('Lisa');
}

const LISA_GREETING = greetFemale('Lisa');

console.log(greetLisa());
console.log(LISA_GREETING);
