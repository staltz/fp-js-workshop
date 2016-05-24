function greet(name) {
  return {
    type: 'console.log',
    payload: `Welcome ${name}!`,
  };
}

var instruction = greet('Richard');
if (instruction.type === 'console.log') {
  console.log(instruction.payload);
}
