//Ajay Borde 16/04
import React from 'react'
import '../../Components/styles/Banner3.css';
import product from './Images/product1.png';
const Banner3 = () => {
  return (
    <div>
      <div className=" h-600 w-250 border text-center text" >
        <h2>Summer Specials</h2>
        <h4>Latest Styles To Sizzle In !</h4>
      </div>
      <div style={{ background: "linear-gradient(to bottom, #FFFFFF , #E8FBFC , #A7F1F0  , #96E8EC )" }}>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
                <div className="row">
                  <div className="col-3 px-0 ">
                    <img src={product} className="img-fluid product" alt="Product not found" />
                  </div>
                  <div className="col-3 px-0 " >
                    <img src={product} className="img-fluid product" alt="Product not found" />
                  </div>
                  <div className="col-3 px-0 " >
                    <img src={product} className="img-fluid product" alt="Product not found" />
                  </div>
                  <div className="col-3 px-0 " >
                    <img src={product} className="img-fluid product" alt="Product not found" />
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div>
                <div className="row">
                  <div className="col-3 px-0 ">
                    <img src={product} className="img-fluid product" alt="Product not found" />
                  </div>
                  <div className="col-3 px-0 " >
                    <img src={product} className="img-fluid product" alt="Product not found" />
                  </div>
                  <div className="col-3 px-0 ">
                    <img src={product} className="img-fluid product" alt="Product not found" />
                  </div>
                  <div className="col-3 px-0 ">
                    <img src={product} className="img-fluid product" alt="Product not found" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon border text-light bg-light slideButton" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-light  slideButton" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Banner3
