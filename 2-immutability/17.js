
// pure function
function addAll(arrayNumbers) {
  let result = 0; // mutable reference
  for (let i = 0; i < arrayNumbers.length; i++) {
    result = result + arrayNumbers[i];
  }
  return result;
}

// impure function
function setAge(user, age) {
  const resultUser = user; // immutable reference
  resultUser.age = age; // mutation of `user`
  return resultUser;
}
