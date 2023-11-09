const appleStore = [
  {
    productName: "iPhone 14 Pro",
    quantity: 50,
    price: 1099.99,
  },
  {
    productName: "MacBook Pro 16-inch",
    quantity: 30,
    price: 2399.99,
  },
  {
    productName: "iPad Air",
    quantity: 75,
    price: 599.99,
  },
  {
    productName: "Apple Watch Series 7",
    quantity: 100,
    price: 399.99,
  },
  {
    productName: "AirPods Pro",
    quantity: 200,
    price: 249.99,
  },
];

// Find the most expensive product   -> MacBook Pro 16-inch
// Find the least expensive product   -> AirPods Pro
// Find the product with the biggest quantity   -> AirPods Pro
// Find the product with the smallest quantity  -> MacBook Pro 16-inch
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]

function getProductDetail(arr) {
  let mostExpensive = [];
  let biggestQuanity = [];
  let allProducts = [];

  for (const product of appleStore) {
    mostExpensive.push(product.price);
    biggestQuanity.push(product.quantity);
    allProducts.push(product.productName);
  }
  console.log(mostExpensive);
  console.log(biggestQuanity);
  return `The most expensive product is ${Math.max(...mostExpensive)}. \n
      The least expensive product is ${Math.min(...mostExpensive)}. \n
      The product with the biggest quantity is ${Math.max(
        ...biggestQuanity
      )}. \n
      The product with the smallest quantity is ${Math.min(
        ...biggestQuanity
      )}. \n
     And list of all product names are ${allProducts}. \n`;
}

console.log(getProductDetail(appleStore));

// for (let i = 0; i < appleStore.length; i++) {
//   console.log(Object.values(appleStore[i]));
// }
