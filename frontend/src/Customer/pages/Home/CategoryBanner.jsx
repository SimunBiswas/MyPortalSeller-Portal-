// have to make category card for category poster
//with fuctionlity to
// redirct '/product?category=cateogryname' to particlue page

import React from "react";
import product from "./Images/product1.png";
import suitimg from "./Images/suits.avif";
import "../../Components/styles/CategoryBanner.css";

const products = [
  { id: 1, src: suitimg, alt: "Product not found", name: "KURTAS" },
  { id: 2, src: product, alt: "Product not found", name: "TOPS" },
  { id: 3, src: suitimg, alt: "Product not found", name: "DRESSES" },
  { id: 4, src: product, alt: "Product not found", name: "SAREES" },
  { id: 5, src: suitimg, alt: "Product not found", name: "SUITS" },
  { id: 6, src: product, alt: "Product not found", name: "LINGERIE" },
  { id: 7, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 8, src: product, alt: "Product not found", name: "LINGERIE" },
  { id: 9, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 10, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 11, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id:12, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 13, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 14, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 15, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 16, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 17, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 18, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 19, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 20, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 21, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 22, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 23, src: suitimg, alt: "Product not found", name: "LINGERIE" },
];

const CategoryBanner = () => {
  return (
    <>
      <div className="row">
        <div className=" category-banner d-flex col-lg-12 col-md-12 col-sm-12 col-12 pt-5 pb-0 top-50 ">
          {products.map((product, key) => {
            return (
              <div className="product-item" key={product.id}>
                <div className="col product-img ">
                  <img
                    className="img-circle product-img"
                    src={product.src}
                    alt=""
                  />
                </div>
                <div className="col product-name">
                  <h6 className="text-center">{product.name}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
};

export default CategoryBanner;
