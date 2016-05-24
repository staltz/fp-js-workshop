function maleify(name: string): string {
  return `Mr. ${name}`;
}

function femaleify(name: string): string {
  return `Ms. ${name}`;
}

function greet(person: string): string {
  return `Hi ${person}`;
}

console.log(greet(femaleify('Lisa')));
