const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const order = new Order(req.body);

    await order.save();

    res.json({
      message: "Order Placed Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;