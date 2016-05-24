function myArrayFilter(condition) {
  return function myArrayFilterWithCondition(array) {
    // Using the conventional array.reduce, no for loops nor mutable variables,
    // implement this function so that it behaves just like an array.filter
  };
}

// Test it by running the code below

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
