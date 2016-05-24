import Immutable from 'immutable';

function setAge(user, age) {
  return user.set('age', age);
}

const userA = Immutable.fromJS(
  {age: 25, name: 'Richard'}
);
const userB = setAge(userA, 26);

console.log(userA);
console.log(userB);
console.log(userA.toJS());
console.log(userB.toJS());
