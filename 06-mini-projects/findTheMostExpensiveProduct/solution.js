function findMostExpensiveProduct(products) {
  let mostExpensive = products[0];

  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }
  }

  return mostExpensive;
}

const products = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 200 },
];

console.log(findMostExpensiveProduct(products));
