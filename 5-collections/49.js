function myArrayMap(operation, array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const newItem = operation(item);
    newArray.push(newItem);
  }
  return newArray;
}

function getPriceArray(shoppingCart) {
  return myArrayMap(product => product.price, shoppingCart.products);
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

const prices = getPriceArray(shoppingCart);

console.log(`Prices: ${JSON.stringify(prices)}`);
