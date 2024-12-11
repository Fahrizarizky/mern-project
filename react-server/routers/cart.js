const express = require("express");
const app = express();
const router = express.Router();
const { GetAllCart, AddToCart, DeleteCart } = require("../controllers/cart");

//route cart
router.get("/allcart", GetAllCart);
router.post("/allcart/:_id/add", AddToCart);
router.delete("/allcart/:_id/delete/:product", DeleteCart);

module.exports = router;
