const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user_id: Number,
  cart_items: [String],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
