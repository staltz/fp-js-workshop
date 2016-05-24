
function addAll(arrayNumbers) {
  var result = 0;
  for (var i = 0; i < arrayNumbers.length; i++) {
    result += arrayNumbers[i];
  }
  return result;
}

console.log(addAll([10, 20, 30, 40]));
