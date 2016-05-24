import _ from 'lodash/fp';

const arr1 = [1, 2, 4, 8, 16];
const arr2 = [2, 4, 6, 8, 10];

const diff = _.intersection(arr1, arr2);
console.log(diff); // [2, 4, 8]
