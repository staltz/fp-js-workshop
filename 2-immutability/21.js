
function setThird(array, value) {
  array[2] = value;
  return array;
}

const array1 = [10, 20, null, 60];
const array2 = setThird(array1, 40);

console.log(array1);
console.log(array2);
