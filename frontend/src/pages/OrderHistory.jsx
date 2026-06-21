import { useEffect, useState } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/orders"
      );

      const data = await response.json();

      setOrders(data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order History</h1>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>Customer: {order.customerEmail}</h3>

            <h4>Products:</h4>

            <ul>
              {order.products.map((product, index) => (
                <li key={index}>
                  {product.name} - ₹{product.price}
                </li>
              ))}
            </ul>

            <p>
              <strong>Total Price:</strong> ₹
              {order.totalPrice}
            </p>

            <p>
              <strong>Address:</strong> {order.address}
            </p>

            <p>
              <strong>Order Date:</strong>{" "}
              {new Date(order.orderDate).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;