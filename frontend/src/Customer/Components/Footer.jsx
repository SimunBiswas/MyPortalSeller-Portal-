import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <style>
        {`
          .text-reset {
            color: inherit;
            text-decoration: none;
          }

          .text-reset:hover {
            color: inherit;
            text-decoration: none; 
          }
        `}
      </style>
      <footer className="footer bg-dark text-white mt-5 p-5">
        <div className="container">
          <div className="row">
            
            <div className=" text-center col-md-3 col-sm-3">
              <div className="footer__widget">
                <h4>Revogue</h4>
                <ul className="list-unstyled">
                <li>
                    <Link to="/about-us" className="text-reset">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-reset">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment-methods" className="text-reset">
                      Return and Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/delivery" className="text-reset">
                    Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/return-exchanges" className="text-reset">
                      Be the part of Revogue
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" text-center col-sm-3">
              <div className="footer__widget">
                <h4>Shopping</h4>
                <ul className="list-unstyled">
                <li>
                    <Link to="/men" className="text-reset">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link to="/women" className="text-reset">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link to="/clothing-store" className="text-reset">
                      Clothing Store
                    </Link>
                  </li>
                  <li>
                    <Link to="/trending-shoes" className="text-reset">
                      Trending Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/accessories" className="text-reset">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link to="/deals" className="text-reset">
                      Deals on Fashion 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" text-center  col-sm-3">
              <div className="footer__widget">
                <h4>Help</h4>
                <ul className="list-unstyled">
                <li>
                    <Link to="/track" className="text-reset">
                      Tracking
                    </Link>
                  </li>
                  <li>
                    <Link to="/returns" className="text-reset">
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link to="/cancellation" className="text-reset">
                      Cancellations
                    </Link>
                  </li>
                  <li>
                    <Link to="/payments" className="text-reset">
                      Payments
                    </Link>
                  </li>
                  <li>
                    <Link to="/customer-care" className="text-reset">
                      Customer Care
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-reset">
                      FAQ 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center col-sm-3">
              <div className="footer__widget">
                <h4>Follow Us</h4>
                <ul className="list-unstyled">
                <li>
                    <Link to="https://www.facebook.com/revogueretailpvtltd?mibextid=kFxxJD" className="text-reset">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="https://lnkd.in/dCuiidCa" className="text-reset">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/groups/7479848" className="text-reset">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link to="https://youtube.com/@ReVogueShop?si=MPJUxWRRofaR1_1G" className="text-reset">
                      YouTube
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/s_bind?t=NSGXumeFdR9vIEDLZBA7sw&s=08" className="text-reset">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="https://pin.it/3ZyApCg" className="text-reset">
                      Pnterest 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
          { /* <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4>NewLetter</h4>
                <div className="footer__newslatter">
                  <p>
                    Be the first to know about new arrivals, look books, sales &
                    promos!
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Your email" />
                    <button type="submit">
                      <span className="icon_mail_alt">Enter</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>*/}
          </div>
          
          <div>
            
            <hr/>
            <h5 className="text-center">Payment Method</h5>
            
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer__copyright__text">
                <p>
                  Copyright © {new Date().getFullYear()} All rights reserved |
                  This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-reset"
                  >
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </>
  );
}

export default Footer;
