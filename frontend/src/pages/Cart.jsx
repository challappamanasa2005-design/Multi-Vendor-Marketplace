function Cart({ cartItems }) {
  return (
    <div>
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;