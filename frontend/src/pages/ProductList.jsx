function ProductList({ cartItems, setCartItems }) {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Smart Watch", price: 5000 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(product.name + " added to cart");
  };

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;