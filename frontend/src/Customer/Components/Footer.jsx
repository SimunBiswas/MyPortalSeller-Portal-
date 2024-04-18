import React from "react";
import { Link } from "react-router-dom";


import { MdVerified } from "react-icons/md";
function Footer() {
  return (
    <>
      <style>
      {`
      .foot-panel{
    
    
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    padding:30px;
   
}

.foot-panel2{
    background-color: #222f3d;
    color: white;
    height: 300px;
    
    display:flex;
    justify-content: space-evenly;
    text-decoration: none;
    
}
ul{
    margin-top: 20px;
}
ul a{
    display: block;
    font-size: 0.85rem;
  margin-top: 10px;
  color: #dddddd;
}

.foot-panel3{
    background-color:#222f3d; 
    border-top: 0.3px solid white;
    color: white;
    height: 150px;
    
}
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
    <div>
    <div className="container-fluid">
      <div class=" row foot-panel ">
        <div className="col-sm-4">
          <center>
            <i className="fas fa-truck-fast fa-5x"></i>
            <h4 >Fast Delivery</h4>
          </center>
        </div>

        <div className="col-sm-4">
         <center> 
            <i class="fa-solid fa-hand-holding-heart fa-5x"></i>
            <h4>100% Handpicked</h4></center>
        </div>
        <div className="col-sm-4 ">
          <center>
            <MdVerified className="fa-5x " />
            <h4>Assured Quality</h4>
          </center>
          </div>
      </div>
        <div class=" container-fluid foot-panel2">
        <ul>
            <p className="text-reset">ReVogue</p>
            <Link to="/ "className="text-reset">Who We Are</Link>
            <Link to="/"className="text-reset">Join our Team</Link>
            <Link to="/"className="text-reset">We Respect Your Privacy</Link>
            <Link to="/"className="text-reset">Fees & Payments</Link>
            <Link to="/"className="text-reset">Returns & Refunds Policy</Link>
            <Link to="/"className="text-reset">Promotion Terms & Conditions</Link>
         
        </ul>

        <ul>
            <p className="text-reset">Help</p>
            <Link to="/"className="text-reset">Track Your Order</Link>
            <Link to="/"className="text-reset">Frequently Asked Question</Link>
            <Link to="/"className="text-reset">Returns</Link>
            <Link to="/"className="text-reset">Cancellations</Link>
            <Link to="/"className="text-reset">Payments</Link>
            <Link to="/"className="text-reset">Customer Care</Link>
            <Link tof="/"className="text-reset">How Do I Redeem My Coupon</Link>
         
        </ul>
        <ul>
            <p>Shop By</p>
            <Link to="/"className="text-reset">Men</Link>
            <Link to="/"className="text-reset">Women</Link>
            <Link to="/"className="text-reset">Kids</Link>
            <Link to="/"className="text-reset">Stores</Link>
            <Link to="/"className="text-reset">New Arrivals</Link>
            <Link to="/"className="text-reset">Home</Link>
            <Link to="/"className="text-reset">Collections</Link>
         
        </ul>

        <ul>
           <p>Follow Us</p>
            <Link to="https://www.facebook.com/revogueretailpvtltd?mibextid=kFxxJD" className="text-reset">Facebook</Link>
            <Link to="https://lnkd.in/dCuiidCa" className="text-reset">Instagram</Link>
            <Link to="https://www.linkedin.com/groups/7479848" className="text-reset">LinkedIn</Link>
            <Link to="https://twitter.com/s_bind?t=NSGXumeFdR9vIEDLZBA7sw&s=08" className="text-reset">Twitter</Link>
            <Link to="https://pin.it/3ZyApCg" className="text-reset">Pinterest</Link>
            <Link to="https://youtube.com/@ReVogueShop?si=MPJUxWRRofaR1_1G"  className="text-reset">YouTube</Link>
         
        </ul>
        </div>

        <div className="foot-panel3" >
        <h4 className="text-center pt-2">Payment Method</h4>
            
            <i className="fab fa-cc-visa fa-5x  px-4"></i>
          <i className="fab fa-cc-mastercard fa-5x px-4"></i>
          <i class="fa-brands fa-google-pay fa-5x px-4"></i>
        </div>
    </div>
  </div>
    </>
  );
}

export default Footer;
