import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Customer/pages/Home/Home";
import Brands from "./Customer/pages/Brands/Brands";
import Cart from "./Customer/pages/Cart/Cart";
import Aboutus from "./Customer/pages/AboutUs/Aboutus";
import Contectus from "./Customer/pages/ContectUs/Contectus";
import Orders from "./Customer/pages/Orders/Orders";
import PrivecyandPolicy from "./Customer/pages/Privecy&Policy/PrivecyandPolicy";
import ReturnPolicy from "./Customer/pages/ReturnPolicy/ReturnPolicy";
import ShippingInfo from "./Customer/pages/ShippingInfo/ShippingInfo";
import TermAndCondition from "./Customer/pages/Terms&Conditions/TermAndCondition";
import UserDashBoard from "./Customer/pages/UserDashboard/UserDashBoard";
import Navbar from "./Customer/Components/Navbar";
import Footer from "./Customer/Components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Products from "./Customer/pages/Products/Products";
import Login from "./Customer/Components/Login";
import ProductDetail from "./Customer/Components/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div
      className={`d-flex flex-column min-vh-100 ${
        isLoginPage ? "login-page" : ""
      }`}
    >
      {!isLoginPage && <Navbar />}

      <div
        className={`flex-grow-1 ${isLoginPage ? "max-vh-100" : "p-4 mt-2 "}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contectus" element={<Contectus />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/privecy&Policy" element={<PrivecyandPolicy />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/returnPolicy" element={<ReturnPolicy />} />
          <Route path="/shippingInfo" element={<ShippingInfo />} />
          <Route path="/terms&conditions" element={<TermAndCondition />} />
          <Route path="/userdashboard" element={<UserDashBoard />} />
        </Routes>
      </div>

      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
