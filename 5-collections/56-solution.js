/*
 * SOLUTION to exercise 56.js in this file.
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
const shoppingCart = {
  products: [
    {price: 150},
    {price: 502},
    {price: 97},
    {price: 818},
    {price: 620}
  ],
};

const expensivePrices = shoppingCart.products
  .filter(product => product.price > 300)
  .map(product => product.price);

console.log(`Expensive prices: ${JSON.stringify(expensivePrices)}`);
