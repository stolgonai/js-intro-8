const bookstore = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    price: 9.99,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    price: 7.99,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
    price: 12.49,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 14.99,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    price: 10.99,
  },
];

// Find the cheapest book in the bookstore  -> To Kill a Mockingbird
// Find the most expensive book in the bookstore  -> Harry Potter and the Sorcerer's Stone
// Find all Classic books   -> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]
const cheapestBook = bookstore.reduce((result, book) => {
  let cheap = bookstore[0].price;
  if (cheap > book.price) {
    cheap = book.price;
    result = book;
  }
  return result;
}, {}).title;
// console.log(cheapestBook);

// const cheap = bookstore.filter;
const expensiveBook = bookstore.reduce((result, book) => {
  if (book.price > result.price) {
    result = book;
  }
  return result;
}, bookstore[0]).title;
console.log(expensiveBook);

let expens = bookstore[0];
for (const book of bookstore) {
  if (book.price > expens.price) {
    expens = book;
  }
}
// console.log(expens.title);

const classicBook = bookstore.reduce((result, book) => {
  if (book.genre === "Classic") {
    result.push(book.title);
  }
  return result;
}, []);
console.log(classicBook);

const shoppingCart = {
  userId: 12345,
  items: [
    {
      productId: 1,
      productName: "Laptop",
      price: 999.0,
      quantity: 1,
      specifications: {
        brand: "Dell",
        screen: "15.6 inches",
        processor: "Intel Core i7",
      },
    },
    {
      productId: 2,
      productName: "Smartphone",
      price: 499.0,
      quantity: 2,
      specifications: {
        brand: "Apple",
        model: "iPhone 12",
        color: "Space Gray",
      },
    },
    {
      productId: 3,
      productName: "Headphones",
      price: 149.0,
      quantity: 3,
      specifications: {
        brand: "Sony",
        type: "Over-ear",
        wireless: true,
      },
    },
  ],
  shippingAddress: {
    street: "123 Main Street",
    city: "Anytown",
    zipCode: "12345",
  },
  orderDate: "2023-08-29",
};
// console.log(shoppingCart.items[0].price);
// Calculate the total price of products in the cart     -> 2444
// Find the brands of all the products in the cart  -> [ 'Dell', 'Apple', 'Sony' ]
// Find all the items in the cart with their quantity -> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]

const totalPrice = shoppingCart.items.reduce((sum, el) => sum + el.price, 0);
let allBrands = [];
for (const brands of shoppingCart.items) {
  allBrands.push(brands.specifications.brand);
}
const quantities = shoppingCart.items.reduce((inVall, el) => {
  if (inVall[el.productName] === undefined) {
    inVall[el.productName] = el.quantity;
  }
  return inVall;
}, {});
// console.log(quantities);

class ShoppingCart {
  constructor() {
    this.cart = [];
    this.customerDetailes = {
      name: "John",
      address: "111 Address str, LA, CA 11111",
    };
  }
  addToCart(product) {
    //Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          this.cart.push(product);
          resolve();
        } else {
          reject("No product added, pls add a product into a cart");
        }
      }, 1000);
    });
  }
  updateTheCart(product) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.cart = [product];
        // console.log("cart after 2sec", this.cart);
      }, 3000);
    });
  }
}

// Step 1
// Create a class called ShoppingCart that contains shopping data.
// Shopping data example: [{ productId: 1, productName: "Laptop", quantity: 1}]

// Step 2
// Class should have a function that simulates the adding to the cart.
// Make this function asynchronous. 1000ms.
// Adds new product to the existing cart.
//  When adding a new product make sure you add with unique productId.

// Step 3
// Class should have a function that simulates the updating the product in the cart.
// You can use productId to find a product.
// Just update the quanity of the product.

// Step 4
// Class should have a function that simulates the logging the cart details.
// It should console log all the cart details.

// Step 5: Keep adding above examples

const shopCart = new ShoppingCart();
// shopCart
//   .addToCart({ productId: 1, productName: "Laptop", quantity: 1 })
//   .then(() => console.log(console.log("shopCart", shopCart)))
//   .catch((err) => console.log(err));

async function main() {
  try {
    await shopCart.addToCart({
      productId: 1,
      productName: "Laptop",
      quantity: 1,
    });
    await shopCart.updateTheCart({
      productId: 2,
      productName: "Smartphone",
      quantity: 2,
    });

    console.log("shopCart", shopCart);
  } catch (err) {
    console.log("err", err);
  }
}
main();
