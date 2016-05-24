const shoppingCart = {
  products: [
    {price: 150},
    {price: 502},
    {price: 97},
    {price: 818},
    {price: 620}
  ],
};

const products = shoppingCart.products.filter(product => product.price > 300);

console.log(`Expensive products: ${JSON.stringify(products)}`);
