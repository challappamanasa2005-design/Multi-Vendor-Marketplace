import { useState } from "react";

function VendorDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/products/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            price,
            category,
            image,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      setName("");
      setPrice("");
      setCategory("");
      setImage("");
    } catch (error) {
      console.log(error);
      alert("Failed to Add Product");
    }
  };

  return (
    <div>
      <h1>Vendor Dashboard</h1>

      <h3>Add New Product</h3>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br /><br />

      <button onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
}

export default VendorDashboard;