
function setAge(user, age) {
  var clonedUser = {
    age: user.age,
    firstname: user.firstname,
    lastname: user.lastname,
    address: user.address,
    dateBirth: user.dateBirth,
    placeBirth: user.placeBirth,
    username: user.username,
  };
  clonedUser.age = age;
  return clonedUser;
}
