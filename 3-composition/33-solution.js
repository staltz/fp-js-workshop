/*
 * SOLUTION to exercise 33.js in this file.
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
import Immutable from 'immutable';

const setUserProperty = (property) => function (user, value) {
  return user.set(property, value);
};
const setAge = setUserProperty('age');

const userA = Immutable.fromJS(
  {age: 25, name: 'Richard'}
);
const userB = setAge(userA, 26);

console.log(userA);
console.log(userB);
console.log(userA.toJS());
console.log(userB.toJS());
