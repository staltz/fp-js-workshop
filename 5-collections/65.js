function myArrayMap(operation) {
  return function myArrayMapWithOperation(array) {
    // Using the conventional array.reduce, no for loops nor mutable variables,
    // implement this function so that it behaves just like an array.map
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

const prices = myArrayMap(product => product.price)(shoppingCart.products);

console.log(`Prices: ${JSON.stringify(prices)}`);
