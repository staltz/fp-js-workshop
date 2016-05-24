/*
 * SOLUTION to exercise 65.js in this file.
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
function myArrayMap(operation) {
  return function myArrayMapWithOperation(array) {
    return array.reduce((acc, x) => acc.concat(operation(x)), [])
  };
}

const shoppingCart = {
  products: [
    {price: 150},
    {price: 502},
    {price: 97},
    {price: 818},
    {price: 620}
  ],
};

const prices = myArrayMap(product => product.price)(shoppingCart.products);

console.log(`Prices: ${JSON.stringify(prices)}`);
