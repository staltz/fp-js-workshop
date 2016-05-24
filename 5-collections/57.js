function getTotal(shoppingCart) {
  let total = 0;
  shoppingCart.products.forEach(function (product) {
    total = total + product.price;
  });
  return total;
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
