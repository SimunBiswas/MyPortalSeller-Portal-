import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faHandHoldingHeart,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import './styles/footer.css';

function Footer() {
  const [menuState, setMenuState] = useState(Array(4).fill(false));

  const toggleMenu = index => {
    const updatedState = [...menuState];
    updatedState[index] = !updatedState[index];
    setMenuState(updatedState);
  };

  return (
    <div className="container-fluid">
      <div className="row foot-panel p-3">
        {[
          { icon: faTruckFast, text: "Fast Delivery" },
          { icon: faHandHoldingHeart, text: "100% Handpicked" },
          { icon: faSquareCheck, text: "Assured Quality" }
        ].map((item, index) => (
          <div key={index} className="col-sm-4">
            <center>
              <FontAwesomeIcon icon={item.icon} style={{ fontSize: "2rem" }} />
              <h4>{item.text}</h4>
            </center>
          </div>
        ))}
      </div>

      <div className="container-fluid foot-panel2">
        {[
          ["ReVogue", ["Who We Are", "Join our Team", "We Respect Your Privacy", "Fees & Payments", "Returns & Refunds Policy", "Promotion Terms & Conditions"]],
          ["Help", ["Track Your Order", "Frequently Asked Question", "Returns", "Cancellations", "Payments", "Customer Care", "How Do I Redeem My Coupon"]],
          ["Shop By", ["Men", "Women", "Kids", "Stores", "New Arrivals", "Home", "Collections"]],
          ["Follow Us", ["Facebook", "Instagram", "LinkedIn", "Twitter", "Pinterest", "YouTube"]]
        ].map((item, index) => (
          <div key={index}>
            <button className={`toggle-btn d-block d-sm-none`} onClick={() => toggleMenu(index)}>
              <h5>{item[0]}</h5>
            </button>
            <ul className={`mobile-menu ${menuState[index] ? 'show' : ''}`} type="none">
              {item[1].map((link, i) => (
                <li key={i}><Link to="/">{link}</Link></li>
              ))}
            </ul>
            <ul className={`desktop-menu d-none d-sm-block ${menuState[index] ? 'show' : ''}`} type="none">
              <h5>{item[0]}</h5>
              {item[1].map((link, i) => (
                <li key={i}><Link to="/">{link}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="foot-panel3">
        <h4 className="text-center pt-2">Payment Method</h4>
        <center>
          <i className="fab fa-cc-visa fa-3x px-4"></i>
          <i className="fab fa-cc-mastercard fa-3x px-4"></i>
          <i className="fa-brands fa-google-pay fa-3x px-4"></i>
        </center>
      </div>
    </div>
  );
}

export default Footer;
