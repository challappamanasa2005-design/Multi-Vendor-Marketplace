import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const customer = localStorage.getItem("customerEmail");
  const vendor = localStorage.getItem("vendorEmail");

  if (!customer && !vendor) {
    return <Navigate to="/customer-login" />;
  }

  return children;
}

export default ProtectedRoute;