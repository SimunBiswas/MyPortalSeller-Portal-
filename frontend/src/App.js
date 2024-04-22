import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import Home from "./Customer/pages/Home/Home";
import Brands from "./Customer/pages/Brands/Brands";
import Cart from "./Customer/pages/Cart/Cart";
import Aboutus from "./Customer/pages/AboutUs/Aboutus";
import Contectus from "./Customer/pages/ContectUs/Contectus";
import Orders from "./Customer/pages/Orders/Orders";
import PrivecyandPolicy from "./Customer/pages/Privecy&Policy/PrivecyandPolicy";
import ProductDeatil from "./Customer/pages/ProductDetails/ProductDeatil";
import ReturnPolicy from "./Customer/pages/ReturnPolicy/ReturnPolicy";
import ShippingInfo from "./Customer/pages/ShippingInfo/ShippingInfo";
import TermAndCondition from "./Customer/pages/Terms&Conditions/TermAndCondition";
import UserDashBoard from "./Customer/pages/UserDashboard/UserDashBoard";
import Navbar from './Customer/Components/Navbar';
import Footer from "./Customer/Components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Products from "./Customer/pages/Products/Products";



function App() {

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5500/api/v6/products");
  //       setProducts(response.data);
  //       console.log(products)
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);  
  
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow-1 p-4">
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
        </div>
        <Footer />
      </BrowserRouter>
      
    </div>
  
  );
}

export default App;
