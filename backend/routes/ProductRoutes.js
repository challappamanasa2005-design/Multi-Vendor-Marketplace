const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.json({
      message: "Product Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;