function VendorDashboard() {
  return (
    <div>
      <h1>Vendor Dashboard</h1>

      <h3>Add New Product</h3>

      <input type="text" placeholder="Product Name" />
      <br /><br />

      <input type="number" placeholder="Price" />
      <br /><br />

      <button>Add Product</button>

      <hr />

      <h3>My Products</h3>

      <ul>
        <li>Laptop - ₹50,000</li>
        <li>Mobile - ₹20,000</li>
      </ul>
    </div>
  );
}

export default VendorDashboard;