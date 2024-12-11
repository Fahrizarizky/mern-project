const express = require("express");
const router = express.Router();
const { GetAllProduct, GetProductDetail } = require("../controllers/product");

router.use(async (req, res, next) => {
  const user = await req.user;
  if (user) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  next();
});

//route product
router.get("/product", GetAllProduct);
router.get("/product/:_id", GetProductDetail);

module.exports = router;
