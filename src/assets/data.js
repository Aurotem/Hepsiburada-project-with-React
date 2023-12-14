let product;
await fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => (product = data));

export default product;