
function setAge(user, age) {
  var clonedUser = {age: user.age, name: user.name};
  clonedUser.age = age;
  return clonedUser;
}
