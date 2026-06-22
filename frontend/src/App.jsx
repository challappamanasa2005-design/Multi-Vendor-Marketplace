import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";

import Home from "./pages/Home";
import VendorRegister from "./pages/VendorRegister";
import VendorLogin from "./pages/VendorLogin";
import CustomerLogin from "./pages/CustomerLogin";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import VendorDashboard from "./pages/VendorDashboard";
import CustomerRegister from "./pages/CustomerRegister";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  return (
    <BrowserRouter>
     <Navbar cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/vendor-register"
          element={<VendorRegister />}
        />

        <Route
          path="/vendor-login"
          element={<VendorLogin />}
        />

        <Route
          path="/customer-login"
          element={<CustomerLogin />}
        />

        <Route
          path="/customer-register"
          element={<CustomerRegister />}
        />

        <Route
          path="/products"
          element={
            <ProductList
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vendor-dashboard"
          element={
            <ProtectedRoute>
              <VendorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout cartItems={cartItems} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;