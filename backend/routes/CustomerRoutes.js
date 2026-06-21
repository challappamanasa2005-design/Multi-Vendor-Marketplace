const express = require("express");
const Customer = require("../models/Customer");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const customer = new Customer(req.body);

    await customer.save();

    res.json({
      message: "Customer Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(400).json({
        message: "Customer not found",
      });
    }
console.log("Entered Password:", password);
console.log("DB Password:", customer.password);
    if (customer.password !== password) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    res.json({
      message: "Login Successful",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;