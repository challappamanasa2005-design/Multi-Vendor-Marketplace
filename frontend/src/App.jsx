import { useState } from "react";
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
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/products" element={ <ProductList cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/customer-register" element={<CustomerRegister/>}/>
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;