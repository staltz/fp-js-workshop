function greet(name) {
  return `console.log('Welcome ${name}!')`;
}

var instruction = greet('Richard');
eval(instruction);
