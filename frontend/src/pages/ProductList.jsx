import { useEffect, useState } from "react";

function ProductList({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);

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

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);

    alert(product.name + " added to cart");
  };

  return (
    <div>
      <h1>Products</h1>

      <p>Total Products: {products.length}</p>

      {products.map((product) => (
        <div key={product._id} className="product-card">
          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <p>Category: {product.category}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;