function getTotal(shoppingCart) {
  return shoppingCart.products
    .reduce((prevTotal, product) => prevTotal + product.price, 0);
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
