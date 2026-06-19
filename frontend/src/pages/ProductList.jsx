function ProductList() {
  return (
    <div>
      <h1>Products</h1>

      <div className="product-card">
        <h3>Laptop</h3>
        <p>Price: ₹50,000</p>
        <button>Add to Cart</button>
      </div>

      <div className="product-card">
        <h3>Mobile</h3>
        <p>Price: ₹20,000</p>
        <button>Add to Cart</button>
      </div>

      <div className="product-card">
        <h3>Headphones</h3>
        <p>Price: ₹3,000</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductList;