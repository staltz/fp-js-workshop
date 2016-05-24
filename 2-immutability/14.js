
function setAge(user, age) {
  user.age = age;
  return user;
}

const userA = {age: 25, name: 'Richard'};
const userB = setAge(userA, 26);

console.log(userA);
console.log(userB);
