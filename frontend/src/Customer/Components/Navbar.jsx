import React from "react";
import { Link } from "react-router-dom";
import "../Components/styles/navbar.css";
import BottomNavbar from "./BottomNavbar";

function Navbar() {
  return (
    <>
      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>ReVogue</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link style={{ textDecoration: 'none' }}  to="#">Sign in</Link>
                    <Link style={{ textDecoration: 'none' }}  to="#">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down"></i>
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link style={{ textDecoration: 'none' }}  to="./index.html">
                  <img src="img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link style={{ textDecoration: 'none' }}  to="/">Women</Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: 'none' }}  to="/">Men</Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: 'none' }}  to="/">Kids</Link>
                  </li>
                  
                  <li>
                    <Link style={{ textDecoration: 'none' }}  to="/">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link style={{ textDecoration: 'none' }}  to="./about.html">About Us</Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: 'none' }}  to="./shop-details.html">Shop Details</Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: 'none' }}  to="./shopping-cart.html">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: 'none' }}  to="./checkout.html">Check Out</Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: 'none' }}  to="./blog-details.html">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link style={{ textDecoration: 'none' }}  to="/">Offers</Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: 'none' }}  to="/">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <Link style={{ textDecoration: 'none' }}  to="#" className="search-switch">
                  <img src="img/icon/search.png" alt="" />
                </Link>
                <Link style={{ textDecoration: 'none' }}  to="#">
                  <img src="img/icon/heart.png" alt="" />
                </Link>
                <Link style={{ textDecoration: 'none' }}  to="#">
                  <img src="img/icon/cart.png" alt="" /> <span>0</span>
                </Link>
                <div className="price">$0.00</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      <BottomNavbar/>
      {/* Header Section End */}
    </>
  );
}

export default Navbar;
