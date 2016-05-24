/*
 * SOLUTION to exercise 42.js in this file.
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
function greet(female, name) {
  return `Hi ${female ? 'Ms.' : 'Mr.'} ${name}!`;
}

function thunkify(fn, ...args) {
  return () => fn(...args);
}

const greetLisa = thunkify(greet, true, 'Lisa');

console.log(greetLisa());
