import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faHandHoldingHeart,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/footer.css";
function Footer() {
  return (
    <div className=" container ">
      <div class=" row foot-panel p-3">
        <div className="col-sm-4">
          <center>
            <FontAwesomeIcon icon={faTruckFast} style={{ fontSize: "2rem" }} />
            <h4>Fast Delivery</h4>
          </center>
        </div>

        <div className="col-sm-4">
          <center>
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              style={{ fontSize: "2rem" }}
            />
            <h4>100% Handpicked</h4>
          </center>
        </div>
        <div className="col-sm-4">
          <center>
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ fontSize: "2rem" }}
            />

            <h4>Assured Quality</h4>
          </center>
        </div>
      </div>
      <div class=" container-fluid foot-panel2 ">
        <ul>
          <p className="text-reset ">
            <h5>ReVogue</h5>
          </p>
          <Link to="/ " className="text-reset">
            Who We Are
          </Link>
          <Link to="/" className="text-reset">
            Join our Team
          </Link>
          <Link to="/" className="text-reset">
            We Respect Your Privacy
          </Link>
          <Link to="/" className="text-reset">
            Fees & Payments
          </Link>
          <Link to="/" className="text-reset">
            Returns & Refunds Policy
          </Link>
          <Link to="/" className="text-reset">
            Promotion Terms & Conditions
          </Link>
        </ul>

        <ul>
          <p className="text-reset">
            <h5>Help</h5>
          </p>
          <Link to="/" className="text-reset">
            Track Your Order
          </Link>
          <Link to="/" className="text-reset">
            Frequently Asked Question
          </Link>
          <Link to="/" className="text-reset">
            Returns
          </Link>
          <Link to="/" className="text-reset">
            Cancellations
          </Link>
          <Link to="/" className="text-reset">
            Payments
          </Link>
          <Link to="/" className="text-reset">
            Customer Care
          </Link>
          <Link tof="/" className="text-reset">
            How Do I Redeem My Coupon
          </Link>
        </ul>
        <ul>
          <p>
            <h5>Shop By</h5>
          </p>
          <Link to="/" className="text-reset">
            Men
          </Link>
          <Link to="/" className="text-reset">
            Women
          </Link>
          <Link to="/" className="text-reset">
            Kids
          </Link>
          <Link to="/" className="text-reset">
            Stores
          </Link>
          <Link to="/" className="text-reset">
            New Arrivals
          </Link>
          <Link to="/" className="text-reset">
            Home
          </Link>
          <Link to="/" className="text-reset">
            Collections
          </Link>
        </ul>

        <ul>
          <p>
            <h5>Follow Us</h5>
          </p>
          <Link
            to="https://www.facebook.com/revogueretailpvtltd?mibextid=kFxxJD"
            className="text-reset"
          >
            Facebook
          </Link>
          <Link to="https://lnkd.in/dCuiidCa" className="text-reset">
            Instagram
          </Link>
          <Link
            to="https://www.linkedin.com/groups/7479848"
            className="text-reset"
          >
            LinkedIn
          </Link>
          <Link
            to="https://twitter.com/s_bind?t=NSGXumeFdR9vIEDLZBA7sw&s=08"
            className="text-reset"
          >
            Twitter
          </Link>
          <Link to="https://pin.it/3ZyApCg" className="text-reset">
            Pinterest
          </Link>
          <Link
            to="https://youtube.com/@ReVogueShop?si=MPJUxWRRofaR1_1G"
            className="text-reset"
          >
            YouTube
          </Link>
        </ul>
      </div>

      <div className="foot-panel3">
        <h4 className="text-center pt-2">Payment Method</h4>
        <center>
          <i className="fab fa-cc-visa fa-3x  px-4"></i>
          <i className="fab fa-cc-mastercard fa-3x px-4"></i>
          <i class="fa-brands fa-google-pay fa-3x px-4"></i>
        </center>
      </div>
    </div>
  );
}

export default Footer;
