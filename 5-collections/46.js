function getPriceArray(shoppingCart) {
  // return an array of numbers
  // [150, 502, 97, 818, 620]
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

console.log(`Prices: ${prices}`);
