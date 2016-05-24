function myArrayReduce(accumulate, seed) {
  return function myArrayReduceWithAccumulate(array) {
    let result = seed;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result = accumulate(result, item);
    };
    return result;
  };
}

// notice the similarities

function myArrayMap(operation) {
  return function myArrayMapWithOperation(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      const newItem = operation(item);
      newArray.push(newItem);
    }
    return newArray;
  };
}
