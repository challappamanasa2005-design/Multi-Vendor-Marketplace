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
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;