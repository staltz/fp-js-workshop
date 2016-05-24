/*
 * SOLUTION to exercise 60.js in this file.
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
const array = ['1', '2', '4', null, 'a', '6', '8', '9'];

const sum = array
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .reduce((acc, x) => acc + x, 0);

console.log(sum);
