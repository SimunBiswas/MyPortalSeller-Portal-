import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Customer/pages/Home/Home";
import Brands from "./Customer/pages/Brands/Brands";
import Cart from "./Customer/pages/Cart/Cart";
import Aboutus from "./Customer/pages/AboutUs/Aboutus";
import Contectus from "./Customer/pages/ContectUs/Contectus";
import Orders from "./Customer/pages/Orders/Orders";
import PrivecyandPolicy from "./Customer/pages/Privecy&Policy/PrivecyandPolicy";
import ProductDeatil from "./Customer/pages/ProductDetails/ProductDeatil";
import Products from "./Customer/pages/Products/Products";
import ReturnPolicy from "./Customer/pages/ReturnPolicy/ReturnPolicy";
import ShippingInfo from "./Customer/pages/ShippingInfo/ShippingInfo";
import TermAndCondition from "./Customer/pages/Terms&Conditions/TermAndCondition";
import UserDashBoard from "./Customer/pages/UserDashboard/UserDashBoard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contectus" element={<Contectus />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/privecy&Policy" element={<PrivecyandPolicy />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDeatil />} />
          <Route path="/returnPolicy" element={<ReturnPolicy />} />
          <Route path="/shippingInfo" element={<ShippingInfo />} />
          <Route path="/terms&conditions" element={<TermAndCondition />} />
          <Route path="/userdashboard" element={<UserDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
