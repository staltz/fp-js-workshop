
interface User {
  age: number;
  name: string;
}

function setAge(user: User, age: number): User {
  const clonedUser = {
    age: user.age,
    name: user.name
  };
  clonedUser.age = age;
  return clonedUser;
}

const userA = {age: 25, name: 'Richard'};
const userB = setAge(userA, 26);

console.log(userA);
console.log(userB);
