// have to create productDetail component look like ajio.com
// also have to fuctionlity to get userId and Commnet
// to store in and object

import React from "react";
import "../Components/styles/ProductDetail.css";
import product_img from "../pages/Home/Images/small_shirt.avif";
import modal_img from "../pages/Home/Images/modal_shirt.avif";
import { Link } from 'react-router-dom';

function ProductDetail() {
  return (
    <section className="detailsPage mb-5 pt-5">
      <div className="container product_Container pt-3 pb-3">
        <div className="row">
          {/* 1st Section */}
          <div className="col-2">
            <div
              className="product-image-gallery"
              style={{ marginTop: "10rem" }}
            >
              <div className="slick-list" style={{ height: "297.333px" }}>
                <div className="slick-track">
                  <div
                    className="img-container left-image"
                    tabIndex="0"
                    role="button"
                  >
                    <img src={product_img} alt="" className="img-alignment" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2st Section */}
          <div className="col-6">
            <div className="row">
              <div className="img-mv-left col-10">
                <div className="image-slick-container" id="main-content">
                  <div className="slick-slider">
                    <button
                      type="button"
                      className="slick-arrow slick-prev"
                      style={{ display: "block" }}
                    ></button>
                    <div className="slick-list">
                      <div
                        className="slick-track"
                        style={{
                          opacity: "1",
                          transform: "translate3d(0px,0px,0px)",
                        }}
                      >
                        <div className="img-container">
                          <img
                            src={modal_img}
                            alt=""
                            className="img-alignment container-img"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-role="none"
                      className="slick-arrow slick-next"
                      style={{ display: "block" }}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className="pdp-model-desc">
                  <div aria-label="Our model wears a Size">
                    <span>Our model wears a Size M</span>
                  </div>
                </div>
                <div
                  className="product-details-tab-block"
                  id="product-details-tab"
                >
                  <nav className="nav nav-tabs" role="tablist">
                    <Link
                      id="product-details-tab-tab-2"
                      href="#"
                      role="tab"
                      data-rb-event-key="2"
                      aria-controls="product-details-tab-tabpane-2"
                      aria-selected="true"
                      className="nav-item nav-link active"
                    >
                      RETURNS
                    </Link>
                    <Link
                      id="product-details-tab-tab-3"
                      href="#"
                      role="tab"
                      data-rb-event-key="3"
                      aria-controls="product-details-tab-tabpane-3"
                      tabindex="-1"
                      aria-selected="false"
                      className="nav-item nav-link"
                    >
                      OUR PROMISE
                    </Link>
                  </nav>
                  <div className="tab-content">
                    <div
                      aria-label="RETURNS"
                      id="product-details-tab-tabpane-2"
                      aria-labelledby="product-details-tab-tab-2"
                      role="tabpanel"
                      aria-hidden="false"
                      className="fade tab-pane active show"
                    >
                      <div className="return-desc">
                        <span>
                          Easy 10 days return and exchange. Return Policies may
                          vary based on products and promotions. For full
                          details on our Returns Policies, please
                        </span>
                        <span>
                          <Link
                            href="https://www.ajio.com/return-refund-policy"
                            target="_blank"
                          >
                            click here
                          </Link>
                          ․
                        </span>
                      </div>
                    </div>
                    <div
                      aria-label="OUR PROMISE"
                      id="product-details-tab-tabpane-3"
                      aria-labelledby="product-details-tab-tab-3"
                      role="tabpanel"
                      aria-hidden="true"
                      className="fade tab-pane"
                    >
                      We assure the authenticity and quality of our products
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3nd Section */}
          <div className="col-4">
            <div className="  prod-content">
              <h2 className="brand-name" aria-label="TEAMSPIRIT">
                TEAMSPIRIT
              </h2>
              <h1
                className="prod-name"
                aria-label="Regular Fit Striped Crew-Neck T-Shirt"
              >
                Regular Fit Striped Crew-Neck T-Shirt
              </h1>
              <div className="rating-popup">
                <div
                  className="_29gtC _3D-mY"
                  style={{ backgroundColor: "rgb(0, 133, 38)" }}
                >
                  <span className="_1p6Xx">
                    4.1
                    <img
                      className="imageIcon"
                      src="https://assets.ajio.com/static/img/green_star_pdp.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div
                  className="_29gtC rating-label-star-count"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <span
                    className="_30rFV"
                    style={{
                      color: "rgb(109, 109, 109)",
                      lineHeight: "1.2",
                      letterSpacing: "0.28px",
                      fontSize: "14px",
                      margin: "0.3em 0px 0.3em 0.5em;",
                    }}
                  >
                    893 Ratings
                  </span>
                </div>
              </div>
              <div className="prod-price-section ">
                <div className="prod-sp">₹245</div>
                <div className="prod-price-sec">
                  <span className="prod-mrp" aria-label="MRP">
                    MRP
                  </span>
                  <span className="prod-cp">₹499</span>
                  <span className="prod-discnt">&nbsp;(51% off)</span>
                </div>
              </div>
              <div
                className="prod-gst"
                aria-label="Price inclusive of all taxes"
              >
                Price inclusive of all taxes
              </div>
              <div className="trustMarkerImages"></div>
              <div className="pdp-promotion">
                <div className="pdp-promo-block">
                  <div className="ic-offer-tag"></div>
                  <div className="promo-blck">
                    <div className="promo-title-blck">
                      <div
                        className="promo-title"
                        aria-label="Use Code<br>FREESHIP"
                      >
                        Use Code
                        <br />
                        FREESHIP
                      </div>
                      <div className="promo-tnc-blck">
                        <span className="promo-tnc">
                          <Link
                            href="/ajio-own-sale-policy"
                            title="T&amp;C"
                            target="_blank"
                            aria-label="T&amp;C"
                          >
                            T&amp;C
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="promo-desc-block">
                      <div className="promo-discounted-price">
                        <div aria-label="Get it for ">
                          Get it for <span>₹208</span>
                        </div>
                      </div>
                      <div
                        className="promo-desc"
                        aria-label="Get Upto Rs.300 Off on 1990 and Above. <Link target='_blank' href=&quot;/s/sale300-5345-47911&quot;>View All Products></Link>"
                      >
                        Get Upto Rs.300 Off on 1990 and Above.{" "}
                        <Link target="_blank" href="/s/sale300-5345-47911">
                          View All Products&gt;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pdp-toggle"
                  aria-label="+8 More"
                  role="button"
                  tabindex="0"
                >
                  +8 More
                </div>
              </div>
              <p className="prod-color" aria-label="blue-melange">
                blue-melange
              </p>
              <div className="color-variant-block">
                <div className="color-swatch selected">
                  <Link
                    href="/teamspirit-regular-fit-striped-crew-neck-t-shirt/p/443003378_bluemelange"
                    className="swatch-item"
                  >
                    <img
                      className="swatch-image swatch-image-selected"
                      src="https://assets.ajio.com/medias/sys_master/root/20221122/8QqU/637c6c8bf997ddfdbd8cc354/-443003378-bluemelange-SWATCH.jpg"
                      alt="blue-melange"
                      title="blue-melange"
                    />
                  </Link>
                </div>
                <div className="color-swatch undefined">
                  <Link
                    href="/teamspirit-regular-fit-striped-crew-neck-t-shirt/p/443003378_grey"
                    className="swatch-item"
                  >
                    <img
                      className="swatch-image swatch-image-notselected"
                      src="https://assets.ajio.com/medias/sys_master/root/20221122/s5Bf/637ca711f997ddfdbd8e410d/-443003378-grey-SWATCH.jpg"
                      alt="grey"
                      title="grey"
                    />
                  </Link>
                </div>
              </div>
              <div className="size-variant-block">
                <div className="size-selection" aria-label="Select Size">
                  Select Size
                </div>
                <div className="slick-initialized slick-slider size-swatch-slick">
                  <button
                    type="button"
                    data-role="none"
                    className="slick-arrow slick-prev slick-disabled"
                    style={{ display: "block" }}
                  >
                    Previous
                  </button>
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{
                        opacity: "1",
                        transform: "translate3d(0px, 0px, 0px)",
                        width: "672px",
                      }}
                    >
                      <div
                        className="slick-slide slick-active size-swatch"
                        data-index="0"
                        tabindex="-1"
                        style={{ outline: "none", width: "42px" }}
                      >
                        <div className="circle swatch-size-oos size-variant-item sprite-img">
                          S
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active size-swatch"
                        data-index="1"
                        tabindex="-1"
                        style={{ outline: "none", width: "42px" }}
                      >
                        <div
                          className="circle size-variant-item size-instock "
                          role="button"
                          tabindex="0"
                        >
                          <span>M</span>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active size-swatch"
                        data-index="2"
                        tabindex="-1"
                        style={{ outline: "none", width: "42px" }}
                      >
                        <div
                          className="circle size-variant-item size-instock "
                          role="button"
                          tabindex="0"
                        >
                          <span>L</span>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active size-swatch"
                        data-index="3"
                        tabindex="-1"
                        style={{ outline: "none", width: "42px" }}
                      >
                        <div
                          className="circle size-variant-item size-instock "
                          role="button"
                          tabindex="0"
                        >
                          <span>XL</span>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active size-swatch"
                        data-index="4"
                        tabindex="-1"
                        style={{ outline: "none", width: "42px" }}
                      >
                        <div
                          className="circle size-variant-item size-instock "
                          role="button"
                          tabindex="0"
                        >
                          <span>XXL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-role="none"
                    className="slick-arrow slick-next"
                    style={{ display: "block" }}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="size-guide-text">
                    <span className="ic-scale-img"></span>
                    <div>
                      <span aria-label="Check Size Chart">
                        Check Size Chart&nbsp;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="edd  " id="edd">
                <div className="edd-pincode-msg">
                  <div className="edd-pincode-msg-container">
                    <span className="ic-address edd-pincode-msg-address-icon"></span>
                    <span
                      className="edd-pincode-msg-details"
                      aria-label="Select your size to know your estimated delivery date."
                    >
                      Select your size to know your estimated delivery date.
                    </span>
                  </div>
                </div>
                <div className="edd-message-success"></div>
              </div>
              <div className="pdp-cart-buttons">
                <div>
                  <div className="pdp-addtocart-button" tabindex="-1">
                    <div className="btn-gold" role="button" tabindex="0">
                      <span className="ic-pdp-add-cart"></span>
                      <span aria-label="ADD TO BAG">ADD TO BAG</span>
                    </div>
                  </div>
                  <div
                    className="pdp-prod-tips"
                    aria-label="HANDPICKED STYLES | ASSURED QUALITY "
                  >
                    HANDPICKED STYLES | ASSURED QUALITY
                  </div>
                </div>
                <div className="save-to-closet-wrapper">
                  <div className="btn-gray" tabindex="0" role="button">
                    <span
                      className="pdp-wishlist-desktop-icon"
                      aria-label="SAVE TO WISHLIST"
                    >
                      <img
                        src="https://assets.ajio.com/static/img/pdp-wishlist-icon-desktop.svg"
                        alt="Add to wishlist"
                      />
                      SAVE TO WISHLIST
                    </span>
                  </div>
                </div>
              </div>
              <section className="prod-desc">
                <h2 className="prod-heading" aria-label="Product Details">
                  <strong>Product Details</strong>
                </h2>
                <h2>
                  <ul className="prod-list">
                    <li className="detail-list">Regular Fit</li>
                    <li className="detail-list">Package contains: 1 t-shirt</li>
                    <li className="detail-list">Machine wash cold</li>
                    <li className="detail-list">60% cotton, 40% polyester</li>
                    <li className="detail-list">
                      <span aria-label="Product Code: ">
                        Product Code: 443003378019
                      </span>
                    </li>
                    <li
                      className="detail-list brandDesc"
                      aria-label="About Teamspirit"
                    >
                      About Teamspirit
                    </li>
                    <li>
                      <div
                        className="other-info-toggle"
                        aria-label="Other information"
                        role="button"
                        tabindex="0"
                      >
                        Other information
                        <span className="rilrtl-accordion-header__end-detail">
                          <i className="ic-angle-down"></i>
                        </span>
                      </div>
                    </li>
                  </ul>
                </h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
