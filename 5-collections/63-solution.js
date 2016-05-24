/*
 * SOLUTION to exercise 63.js in this file.
 *
 * Please try to actually solve it before looking
 * at the solution.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Ready?
 *
 */
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

const peopleWithCategories = Immutable.fromJS(people)
  .map((person) => {
    const h = person.get('height');
    const w = person.get('weight');
    const bmi = w / (h * h);
    if (bmi < 18.5) {
      return person.set('category', 'underweight');
    } else if (bmi < 25) {
      return person.set('category', 'normal');
    } else if (bmi < 30) {
      return person.set('category', 'overweight');
    } else {
      return person.set('category', 'obese');
    }
  });


const overweightMen = peopleWithCategories
  .filter(p => p.get('gender') === 'male' && p.get('category') === 'overweight')
  .sortBy(p => p.get('name'))
  .map(p => p.get('name'))
  .toArray();

console.log(overweightMen);
