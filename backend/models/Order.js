const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerEmail: {
    type: String,
    required: true,
  },

  products: [
    {
      name: String,
      price: Number,
    },
  ],

  totalPrice: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  orderDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);