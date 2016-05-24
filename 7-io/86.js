// Pure:

function greet(name) {
  return {
    type: 'console.log',
    payload: `Welcome ${name}!`,
  };
}

function sendRequest(url) {
  return {
    type: 'fetch',
    payload: url,
  };
}

var instructions = [
  greet('Richard'),
  sendRequest('http://google.com')
];

// Impure:

instructions.forEach(instruction => {
  switch (instruction.type) {
    case 'console.log':
      console.log(instruction.payload);
      break;
    case 'fetch':
      fetch(instruction.payload);
      break;
    default:
  }
});
