function updateInvoiceTotal(invoice, shoppingCart) {
  let result = 0;
  const length = shoppingCart.products.length;
  for (let i = 0; i < length; i++) {
    result += shoppingCart.products[i].price;
  }
  invoice.total = result;
}

const invoice = {
  total: 2055,
};

console.log(`Invoice before: ${invoice.total}`);

const shoppingCart = {
  products: [
    {price: 150},
    {price: 502},
    {price: 97},
    {price: 818},
    {price: 620}
  ],
};

updateInvoiceTotal(invoice, shoppingCart);

console.log(`Invoice after: ${invoice.total}`);
