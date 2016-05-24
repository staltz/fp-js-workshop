/*
 * SOLUTION to exercise 24.js in this file.
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
import Immutable from 'immutable';

function updateInvoiceTotal(invoice, shoppingCart) {
  let result = 0;
  const length = shoppingCart.get('products').size;
  for (let i = 0; i < length; i++) {
    result += shoppingCart.get('products').get(i).get('price');
  }
  return invoice.set('total', result);
}

const invoice = Immutable.fromJS({
  total: 2055,
});

console.log(`Invoice before: ${invoice.get('total')}`);

const shoppingCart = Immutable.fromJS({
  products: [
    {price: 150},
    {price: 502},
    {price: 97},
    {price: 818},
    {price: 620}
  ],
});

const newInvoice = updateInvoiceTotal(invoice, shoppingCart);

console.log(`Invoice after: ${invoice.get('total')}`);

console.log(`New invoice: ${newInvoice.get('total')}`);
