/* 
 * Filename: sophisticated_program.js
 * 
 * Description: This program demonstrates a sophisticated, elaborate and complex JavaScript code. It simulates a virtual store system with inventory management, customer handling, and order processing capabilities.
 */

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log(`Product ${product.name} added to inventory.`);
  }

  removeProduct(productId) {
    const index = this.products.findIndex(product => product.id === productId);

    if (index !== -1) {
      const productName = this.products[index].name;
      this.products.splice(index, 1);
      console.log(`Product ${productName} removed from inventory.`);
    } else {
      console.log(`Product with ID ${productId} not found in inventory.`);
    }
  }

  getProductById(productId) {
    return this.products.find(product => product.id === productId);
  }

  listProducts() {
    this.products.forEach(product => {
      console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
    });
  }
}

class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cart = [];
  }

  addToCart(product, quantity) {
    if (product) {
      this.cart.push({ product, quantity });
      console.log(`Product ${product.name} added to cart.`);
    } else {
      console.log(`Invalid product.`);
    }
  }

  removeFromCart(productId) {
    const index = this.cart.findIndex(item => item.product.id === productId);

    if (index !== -1) {
      const productName = this.cart[index].product.name;
      this.cart.splice(index, 1);
      console.log(`Product ${productName} removed from cart.`);
    } else {
      console.log(`Product with ID ${productId} not found in cart.`);
    }
  }

  checkout() {
    console.log(`Order placed for customer ${this.name}`);
    console.log(`Order details:`);
    let totalAmount = 0;

    this.cart.forEach(item => {
      const { product, quantity } = item;
      const totalPrice = product.price * quantity;
      console.log(`Product: ${product.name}, Quantity: ${quantity}, Price: ${totalPrice}`);
      totalAmount += totalPrice;
    });

    console.log(`Total Amount: ${totalAmount}`);
    this.cart = [];
    console.log(`Thank you for your purchase, ${this.name}!`);
  }
}

// Usage example

const inventory = new Inventory();

const product1 = new Product(1, 'Apple', 1.5);
const product2 = new Product(2, 'Banana', 2.0);
const product3 = new Product(3, 'Orange', 3.0);

inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

inventory.listProducts();

const customer1 = new Customer(1, 'John Doe', 'john.doe@example.com');
const customer2 = new Customer(2, 'Jane Smith', 'jane.smith@example.com');

customer1.addToCart(product1, 3);
customer1.addToCart(product2, 2);
customer2.addToCart(product3, 4);

customer1.checkout();
customer2.checkout();

inventory.removeProduct(2);

inventory.listProducts();

customer2.removeFromCart(3);

inventory.listProducts();
customer2.checkout();