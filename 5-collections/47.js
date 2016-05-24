function getPriceArray(shoppingCart) {
  let array = [];
  shoppingCart.products.forEach(function (product) {
    array.push(product.price);
  });
  return array;
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
