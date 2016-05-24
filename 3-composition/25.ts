function greet(name: string, female: boolean): string {
  return `Hi ${female ? 'Ms.' : 'Mr.'} ${name}!`;
}

console.log(greet('Richard', false));
