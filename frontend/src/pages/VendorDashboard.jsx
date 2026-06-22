import { useEffect, useState } from "react";

function VendorDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
const [editName, setEditName] = useState("");
const [editPrice, setEditPrice] = useState("");
const [editCategory, setEditCategory] = useState("");
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/products"
      );

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Failed to Add Product");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      alert(data.message);

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const startEdit = (product) => {
  setEditId(product._id);
  setEditName(product.name);
  setEditPrice(product.price);
  setEditCategory(product.category);
};

const updateProduct = async () => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/products/${editId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editName,
          price: editPrice,
          category: editCategory,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    setEditId(null);
    fetchProducts();
  } catch (error) {
    console.log(error);
    alert("Failed to Update Product");
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

    <hr />

    <h2>My Products</h2>

    {products.map((product) => (
      <div key={product._id}>
        
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            width="150"
            height="150"
          />
        )}

        <h4>{product.name}</h4>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>

        <button onClick={() => deleteProduct(product._id)}>
          Delete
        </button>

        {" "}

        <button onClick={() => startEdit(product)}>
          Edit
        </button>

        {editId === product._id && (
          <div>
            <br />

            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Product Name"
            />

            <br /><br />

            <input
              type="number"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
              placeholder="Price"
            />

            <br /><br />

            <input
              type="text"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              placeholder="Category"
            />

            <br /><br />

            <button onClick={updateProduct}>
              Update Product
            </button>
          </div>
        )}

        <hr />
      </div>
    ))}
  </div>
);
}

export default VendorDashboard;