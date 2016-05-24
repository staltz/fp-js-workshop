/*
 * SOLUTION to exercise 61.js in this file.
 *
 * Please try to actually solve it before looking
 * at the solution.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Ready?
 *
 */
import _ from 'lodash/fp';
import Immutable from 'immutable';

function increaseFirstProductPrice(shoppingCart) {
  return shoppingCart.update('products', products =>
    products.update(0, product =>
      product.update('price', price =>
        price + 100
      )
    )
  );
}

function totalInShoppingCart(shoppingCart) {
  return shoppingCart.get('products')
    .map(product => product.get('price'))
    .reduce((acc, price) => acc + price);
}

function updateInvoiceTotal(invoice) {
  return function (newTotal) {
    return invoice.set('total', newTotal);
  };
}

function discount(invoice) {
  return invoice.update('total', total => total * 0.9);
}

const invoice = Immutable.fromJS({
  total: 2055,
});
console.log(`Invoice before: ${invoice.get('total')}`);

const calculateTotal = _.pipe(
  increaseFirstProductPrice,
  totalInShoppingCart,
  updateInvoiceTotal(invoice),
  discount
);

const shoppingCart = Immutable.fromJS({
  products: [
    {price: 150},
    {price: 502},
    {price: 97},
    {price: 818},
    {price: 620}
  ],
});

const newInvoice = calculateTotal(shoppingCart);

console.log(`Invoice after: ${invoice.get('total')}`);
console.log(`New invoice: ${newInvoice.get('total')}`);
