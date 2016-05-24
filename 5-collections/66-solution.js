/*
 * SOLUTION to exercise 66.js in this file.
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
function myArrayFilter(condition) {
  return function myArrayFilterWithCondition(array) {
    return array.reduce((acc, x) => {
      if (condition(x)) {
        return acc.concat(x);
      } else {
        return acc;
      }
    }, [])
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

const expensiveProducts = myArrayFilter(p => p.price > 300)(shoppingCart.products);

console.log(`Expensive products: ${JSON.stringify(expensiveProducts)}`);
