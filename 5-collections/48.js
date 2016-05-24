function getPriceArray(shoppingCart) {
  return shoppingCart.products.map(product => product.price);
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
