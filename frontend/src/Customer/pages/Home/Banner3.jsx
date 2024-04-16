import React from 'react';
import '../../Components/styles/Banner3.css';
import product from './Images/product1.png';

const products = [
  { id: 1, src: product, alt: 'Product not found' },
  { id: 2, src: product, alt: 'Product not found' },
  { id: 3, src: product, alt: 'Product not found' },
  { id: 4, src: product, alt: 'Product not found' },
];

const renderProducts = () => {
  return products.map((product) => (
    <div className="col-3 px-0" key={product.id}>
      <img src={product.src} className="img-fluid product" alt={product.alt} />
    </div>
  ));
};

const Banner3 = () => {
  return (
    <div>
      <div className="h-600 w-250 border text-center text p-4">
        <h2>Summer Specials</h2>
        <h4>Latest Styles To Sizzle In !</h4>
      </div>
      <div style={{ background: "linear-gradient(to bottom, #FFFFFF , #E8FBFC , #A7F1F0  , #96E8EC )", padding: "0 100px" }}>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
                <div className="row">
                  {renderProducts()}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="row">
                  {renderProducts()}
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon border text-dark bg-dark slideButton" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark text-dark  slideButton" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
