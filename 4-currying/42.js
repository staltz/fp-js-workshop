function greet(female, name) {
  return `Hi ${female ? 'Ms.' : 'Mr.'} ${name}!`;
}

function thunkify(fn, ...args) {
  // write this function to return a thunk that runs fn
}

const greetLisa = // use `thunkify` and `greet` to make this thunk

console.log(greetLisa());
