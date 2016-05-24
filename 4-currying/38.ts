function basicAdd(x: number, y: number): number {
  return x + y;
}

function add(x: number): ((y: number) => number) {
  return function addX(y: number): number {
    return basicAdd(x, y);
  };
}

// or:
// const add = _.curry(basicAdd);

const addTen = add(10);

console.log(addTen(4)); // 14
console.log(add(10)(4)); // 14
