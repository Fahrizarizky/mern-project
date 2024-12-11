const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/mern_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

Product.insertMany([
  {
    name: "Product 1",
    price: 100,
    description: "Product 1 description",
    category: "Category 1",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 2",
    price: 200,
    description: "Product 2 description",
    category: "Category 2",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 3",
    price: 300,
    description: "Product 3 description",
    category: "Category 3",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 4",
    price: 400,
    description: "Product 4 description",
    category: "Category 4",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 5",
    price: 500,
    description: "Product 5 description",
    category: "Category 5",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 6",
    price: 600,
    description: "Product 6 description",
    category: "Category 6",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 7",
    price: 700,
    description: "Product 7 description",
    category: "Category 7",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 8",
    price: 800,
    description: "Product 8 description",
    category: "Category 8",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 9",
    price: 900,
    description: "Product 9 description",
    category: "Category 9",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 10",
    price: 1000,
    description: "Product 10 description",
    category: "Category 10",
    image: "https://via.placeholder.com/150",
  },
]);
