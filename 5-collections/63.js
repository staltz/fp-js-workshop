import _ from 'lodash/fp';
import Immutable from 'immutable';

const people = [
  {name: 'Lisa Pisa', gender: 'female', height: 1.65, weight: 57},
  {name: 'Marko Starko', gender: 'male', height: 1.72, weight: 85},
  {name: 'James Bond', gender: 'male', height: 1.57, weight: 64},
  {name: 'Jacky Chan', gender: 'male', height: 1.84, weight: 116},
  {name: 'Marco Polo', gender: 'male', height: 1.58, weight: 66},
  {name: 'Lara Croft', gender: 'female', height: 1.88, weight: 69},
  {name: 'Mary Antoinette', gender: 'female', height: 1.61, weight: 89},
  {name: 'Obi-wan Kenobi', gender: 'male', height: 1.98, weight: 111},
  {name: 'Leonardo Da Vinci', gender: 'male', height: 1.98, weight: 63},
  {name: 'Marylyn Monroe', gender: 'female', height: 1.65, weight: 62},
  {name: 'Lizzie Frizzle', gender: 'female', height: 1.52, weight: 95},
  {name: 'Leia Organa', gender: 'female', height: 1.75, weight: 69}
];

// Given the data above, calculate the BMI (Body-Mass Index) of each
// person, and then add a field `category` to each one of them such that:
//         BMI < 18.5: 'underweight'
// 18.5 <= BMI < 25.0: 'normal'
// 25.0 <= BMI < 30.0: 'overweight'
// 30.0 <= BMI       : 'obese'
//
// Then, create the array overweightMen that contains only the *names* of
// overweight men, sorted by name.
// All of this should be done in an immutable and functional manner.
// To make sure, after the console.log, the people array should stay unmodified.

const overweightMen = // array of sorted names of men in the overweight category

console.log(overweightMen);
// Console should show:
// > ["James Bond", "Marco Polo", "Marko Starko", "Obi-wan Kenobi"]
