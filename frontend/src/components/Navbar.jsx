import { Link } from "react-router-dom";

function Navbar({ cartItems }) {

  const handleLogout = () => {
    localStorage.removeItem("customerEmail");
    localStorage.removeItem("vendorEmail");

    alert("Logged Out Successfully");

    window.location.href = "/";
    
  };
  

  return (
    <nav>
      <h2>Multi-Vendor Marketplace</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/vendor-register">Vendor Register</Link> |{" "}
      <Link to="/vendor-login">Vendor Login</Link> |{" "}
      <Link to="/customer-login">Customer Login</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/cart"> Cart ({cartItems.length}) </Link>|{" "}
      <Link to="/vendor-dashboard">Dashboard</Link> |{" "}
      <Link to="/customer-register">Customer Register</Link> |{" "}
      <Link to="/orders">Order History</Link> |{" "}

      <button className="logout-btn" onClick={handleLogout}>
  Logout
</button>
    </nav>
  );
}

export default Navbar;