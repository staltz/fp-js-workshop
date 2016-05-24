function maleify(name: string): string {
  return `Mr. ${name}`;
}

function femaleify(name: string): string {
  return `Ms. ${name}`;
}

function greet(person: string): string {
  return `Hi ${person}`;
}

function greetFemale(name: string): string {
  return greet(femaleify(name));
}

console.log(greetFemale('Lisa'));
