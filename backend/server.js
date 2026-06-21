require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const vendorRoutes = require("./routes/vendorRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/vendors", vendorRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});