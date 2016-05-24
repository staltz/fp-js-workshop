/*
 * SOLUTION to exercise 39.js in this file.
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
import _ from 'lodash/fp';

function greet(female, name) {
  return `Hi ${female ? 'Ms.' : 'Mr.'} ${name}!`;
}

const greetFemale = _.curry(greet)(true);

console.log(greetFemale('Lisa'));
