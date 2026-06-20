const express = require("express");
const Vendor = require("../models/Vendor");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const vendor = new Vendor(req.body);

    await vendor.save();

    res.json({
      message: "Vendor Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;