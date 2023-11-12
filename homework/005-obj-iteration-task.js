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

// function getProductDetail(arr) {
//   let prices = [];
//   let quanity = [];
//   let allProducts = [];

//   for (const product of appleStore) {
//     prices.push(product.price);
//     quanity.push(product.quantity);
//     allProducts.push(product.productName);
//   }

//   // console.log(prices);
//   // console.log(quanity);
//   return `The most expensive product is ${Math.max(
//     ...prices
//   )}.\n The least expensive product is ${Math.min(
//     ...prices
//   )}.\n The product with the biggest quantity is ${Math.max(
//     ...quanity
//   )}.\n The product with the smallest quantity is ${Math.min(
//     ...quanity
//   )}.\n And list of all product names are ${allProducts}. \n`;
// }

let mostExpProduct = appleStore[0];
let cheapestExpProduct = appleStore[0];
let biggestQuanity = appleStore[0];
let lessQuanity = appleStore[0];
let allProducts = [];

for (const product of appleStore) {
  allProducts.push(product.productName);
  if (product.price > mostExpProduct.price) mostExpProduct = product;
  if (product.price < cheapestExpProduct.price) cheapestExpProduct = product;
  if (product.quantity > mostExpProduct.quantity) biggestQuanity = product;
  if (product.quantity > lessQuanity.quantity) lessQuanity = product;
}

console.log(biggestQuanity.productName, "biggestQuanity");
console.log(lessQuanity.productName, "lessQuanity");
console.log(mostExpProduct.productName, "mostExp");
console.log(cheapestExpProduct.productName, "cheapestExp");
console.log(allProducts, "cheapestExp");
