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
    console.log(req.body); 

    const { email, password } = req.body;
    const cleanEmail = email.trim();
const cleanPassword = password.trim();

    const customer = await Customer.findOne({ email:cleanEmail });

    if (!customer) {
      return res.status(400).json({
        message: "Customer not found",
      });
    }

   console.log("Entered Password:", password);
console.log("DB Password:", customer.password);
console.log("DB Password Length:", customer.password.length);
console.log("Entered Password Length:", password.length);
    // Debug version
    if (customer.password === password) {
      return res.json({
        message: "Login Successful",
      });
    }
if (customer.password !== cleanPassword) {
    return res.status(400).json({
      message: "Invalid Password",
    });
  }

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;