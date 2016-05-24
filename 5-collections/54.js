function myArrayFilter(condition) {
  return function myArrayFilterWithCondition(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (condition(item)) {
        newArray.push(item);
      }
    };
    return newArray;
  };
}

function getExpensiveProducts(shoppingCart) {
  return myArrayFilter(product => product.price > 300)(shoppingCart.products);
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
