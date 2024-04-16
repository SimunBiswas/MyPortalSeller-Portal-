import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__logo">
                <Link to="/"><img src="img/footer-logo.png" alt="" /></Link>
              </div>
              <p>The customer is at the heart of our unique business model, which includes design.</p>
              <Link to="/"><img src="img/payment.png" alt="" /></Link>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
            <div className="footer__widget">
              <h6>Shopping</h6>
              <ul>
                <li><Link to="/clothing-store">Clothing Store</Link></li>
                <li><Link to="/trending-shoes">Trending Shoes</Link></li>
                <li><Link to="/accessories">Accessories</Link></li>
                <li><Link to="/sale">Sale</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="footer__widget">
              <h6>Shopping</h6>
              <ul>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/payment-methods">Payment Methods</Link></li>
                <li><Link to="/delivery">Delivery</Link></li>
                <li><Link to="/return-exchanges">Return & Exchanges</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6>NewLetter</h6>
              <div className="footer__newslatter">
                <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                <form action="#">
                  <input type="text" placeholder="Your email" />
                  <button type="submit"><span className="icon_mail_alt"></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer__copyright__text">
              <p>Copyright © {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
