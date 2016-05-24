function getExpensiveProducts(shoppingCart) {
  let array = [];
  shoppingCart.products.forEach(function (product) {
    if (product.price > 300) {
      array.push(product);
    }
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

const products = getExpensiveProducts(shoppingCart);

console.log(`Expensive products: ${JSON.stringify(products)}`);
