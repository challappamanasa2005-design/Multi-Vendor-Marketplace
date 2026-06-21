import { Link } from "react-router-dom";
function Cart({ cartItems, setCartItems }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter(
      (_, index) => index !== indexToRemove
    );

    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}

                <button
                  onClick={() => removeItem(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{totalPrice}</h3>
          <Link to="/checkout">
  <button>Proceed to Checkout</button>
</Link>
        </>
      )}
    </div>
  );
}

export default Cart;