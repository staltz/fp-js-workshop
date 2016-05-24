import _ from 'lodash/fp';

function greet(female, name) {
  console.log('running greet()...');
  return `Hi ${female ? 'Ms.' : 'Mr.'} ${name}!`;
}

const greetFemale = _.curry(greet)(true);

function greetLisa() {
  return greetFemale('Lisa');
}

const LISA_GREETING = greetFemale('Lisa');

console.log('BEFORE');
console.log(greetLisa());
console.log(LISA_GREETING);
console.log('AFTER');
