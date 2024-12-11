const Cart = require("../models/cart");
const Product = require("../models/product");

const GetAllCart = async (req, res) => {
  const cart = await Cart.findOne({ user_id: 1 });
  const allProduct = await Product.aggregate([
    {
      $match: {
        code: { $in: cart.cart_items },
      },
    },
  ]);
  res.json(allProduct);
};

const AddToCart = async (req, res) => {
  const _id = Number(req.params._id);
  const code = String(req.body.code);
  Cart.updateOne({ user_id: _id }, { $addToSet: { cart_items: code } })
    .then(() => {
      res.json({ message: "Successfully added to cart" });
    })
    .catch((err) => {
      res.json({ message: "Failed to add to cart", err });
    });
};

const DeleteCart = async (req, res) => {
  const _id = Number(req.params._id);
  const product = String(req.params.product);
  Cart.updateOne({ user_id: _id }, { $pull: { cart_items: product } })
    .then(() => {
      res.json({ message: "Successfully remove to cart" });
    })
    .catch((err) => {
      res.json({ message: "Failed to remove to cart", err });
    });
};

module.exports = { GetAllCart, AddToCart, DeleteCart };
