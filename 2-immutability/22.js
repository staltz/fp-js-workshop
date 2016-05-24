
function setThird(array, value) {
  const clonedArray = [...array];
  // or:
  // const clonedArray = array.slice();
  clonedArray[2] = value;
  return clonedArray;
}

const array1 = [10, 20, null, 60];
const array2 = setThird(array1, 40);

console.log(array1);
console.log(array2);
