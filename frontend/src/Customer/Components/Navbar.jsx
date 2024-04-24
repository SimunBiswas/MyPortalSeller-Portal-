import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Components/styles/navbar.css";
import BottomNavbar from "./BottomNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [headerHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header d-flex flex-column">
        <div className={`header__top ${headerHidden ? "hide" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>ReVogue</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right d-flex justify-content-end">
                  <div className="header__top__links">
                    <Link to="#">Sign in</Link>
                    <Link to="#">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      USD <i className="arrow_carrot-down"></i>
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
        <nav
          className={`${
            headerHidden ? "header__bottom_top" : "header__bottom"
          } navbar navbar-expand-lg navbar-light bg-light sticky-top`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              ReVogue
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-flex justify-content-between">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Women
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Men
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Kids
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contectus">
                      Contact
                    </Link>
                  </li>
                </ul>
                <form className="d-flex p-2" role="search">
                  <div className="d-flex m-1">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center p-2">
                  <FontAwesomeIcon className="fs-2 px-3" icon={faCartShopping} />
                  <FontAwesomeIcon className="fs-2 px-3" icon={faUser} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <BottomNavbar />
    </>
  );
}

export default Navbar;
