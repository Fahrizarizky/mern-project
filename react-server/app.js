const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

mongoose
  .connect("mongodb://localhost:27017/mern_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const cartRouter = require("./routers/cart");
const productRouter = require("./routers/product");

app.use("/api", cartRouter, productRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
