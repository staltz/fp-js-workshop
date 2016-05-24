import _ from 'lodash/fp';
import Immutable from 'immutable';

function increaseFirstProductPrice(shoppingCart) {
  // return a new shoppingCart immutable structure
  // where the price of the first product is updated
  // with +100 more than before.
}

function updateInvoiceTotal(invoice, shoppingCart) {
  // You maybe need to change/fix this function.
  let result = 0;
  const length = shoppingCart.get('products').size;
  for (let i = 0; i < length; i++) {
    result += shoppingCart.get('products').get(i).get('price');
  }
  return invoice.set('total', result);
}

function discount(invoice) {
  // return a new invoice immutable structure
  // where the total field is updated to 90%
  // of the previous value.
}

const invoice = Immutable.fromJS({
  total: 2055,
});
console.log(`Invoice before: ${invoice.get('total')}`);

// Create a function called `calculateTotal`
// that calls, in sequence,
// 1. increaseFirstProductPrice
// 2. updateInvoiceTotal
// 3. discount
// You may need to change something else to make it work.
const calculateTotal = // ...

const shoppingCart = Immutable.fromJS({
  products: [
    {price: 150},
    {price: 502},
    {price: 97},
    {price: 818},
    {price: 620}
  ],
});

const newInvoice = // call calculateTotal here

console.log(`Invoice after: ${invoice.get('total')}`);
console.log(`New invoice: ${newInvoice.get('total')}`);
