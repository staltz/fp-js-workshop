function maleify(name: string): string {
  return `Mr. ${name}`;
}

function femaleify(name: string): string {
  return `Ms. ${name}`;
}

function greet(person: string): string {
  return `Hi ${person}`;
}

function composeLTR(fn1: Function, fn2: Function): Function {
  return function (x) { return fn2(fn1(x)); };
}

const greetFemale = composeLTR(femaleify, greet);

console.log(greetFemale('Lisa'));
