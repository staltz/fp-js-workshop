function myArrayReduce(accumulate, seed) {
  return function myArrayReduceWithAccumulate(array) {
    let result = seed;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result = accumulate(result, item);
    };
    return result;
  };
}

function getTotal(shoppingCart) {
  return myArrayReduce((acc, p) => acc + p.price, 0)(shoppingCart.products);
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

const total = getTotal(shoppingCart);

console.log(`Total in shopping cart: ${JSON.stringify(total)}`);
