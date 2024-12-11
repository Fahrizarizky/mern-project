const Product = require("../models/product");

const GetAllProduct = async (req, res) => {
  const allProducts = await Product.find();
  res.cookie("testing", "coba cookies");
  res.json(allProducts);
};

const GetProductDetail = async (req, res) => {
  const { _id } = req.params;
  const productDetail = await Product.findById(_id);
  res.json(productDetail);
};

module.exports = { GetAllProduct, GetProductDetail };
