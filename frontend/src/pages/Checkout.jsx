import { useState } from "react";

function Checkout({ cartItems }) {
  const [address, setAddress] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

 const placeOrder = async () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty");
    return;
  }

  if (!address) {
    alert("Please enter delivery address");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/orders/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerEmail: "manasa@gmail.com", // Temporary
          products: cartItems,
          totalPrice: totalPrice,
          address: address,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);
  } catch (error) {
    console.log(error);
    alert("Failed to Place Order");
  }
};
  return (
    <div>
      <h1>Checkout</h1>

      <h3>Delivery Address</h3>

      <textarea
        rows="4"
        cols="40"
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <h3>Order Summary</h3>

      {cartItems.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} - ₹{item.price}
          </p>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;