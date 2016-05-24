import Immutable from 'immutable';

function setThird(list, value) {
  return list.set(2, value);
}

const list1 = Immutable.fromJS([10, 20, null, 60]);
const list2 = setThird(list1, 40);

console.log(list1);
console.log(list2);
console.log(list1.toJS());
console.log(list2.toJS());
