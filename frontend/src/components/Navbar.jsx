import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Multi-Vendor Marketplace</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/vendor-register">Vendor Register</Link> |{" "}
      <Link to="/vendor-login">Vendor Login</Link> |{" "}
      <Link to="/customer-login">Customer Login</Link> |{" "}
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/vendor-dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;