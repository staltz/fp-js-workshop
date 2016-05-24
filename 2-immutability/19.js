
function setAge(user, age) {
  var clonedUser = Object.create(user);
  clonedUser.age = age;
  return clonedUser;
}

const userA = {age: 25, name: 'Richard'};
const userB = setAge(userA, 26);

console.log(userA);
console.log(userB);
console.log(userB.name);
console.log(userA.isPrototypeOf(userB));
