/*
 * SOLUTION to exercise 75.js in this file.
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
const arrayClicks = [
  {clientX: 528},
  {clientX: 130},
  {clientX: 255},
  {clientX: 308},
  {clientX: 40},
];

const largeX = arrayClicks
  .map(click => click.clientX)
  .filter(x => x > 200);

largeX.forEach(x => console.log(x));
