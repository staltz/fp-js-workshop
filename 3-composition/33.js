import _ from 'lodash/fp';
import Immutable from 'immutable';

const setUserProperty = (property) => function (user, value) {
  // write this function
};
const setAge = // build this function from setUserProperty

const userA = Immutable.fromJS(
  {age: 25, name: 'Richard'}
);
const userB = setAge(userA, 26);

console.log(userA);
console.log(userB);
console.log(userA.toJS());
console.log(userB.toJS());
