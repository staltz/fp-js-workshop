function getExpensiveProducts(shoppingCart) {
  return shoppingCart.products.filter(product => product.price > 300);
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
