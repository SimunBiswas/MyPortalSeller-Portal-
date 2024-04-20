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
  { id: 4, src: suitimg, alt: "Product not found", name: "SUITS" },
  { id: 4, src: product, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: product, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: suitimg, alt: "Product not found", name: "LINGERIE" },
];

const CategoryBanner = () => {
  return (
    <>
      <div class="row">
        <div class=" category-banner d-flex col-lg-12 col-md-12 col-sm-12 col-12 ">
          {products.map((product) => {
            return (
              <div class="product-item">
                <div className="col product-img ">
                  <img
                    class="img-circle product-img"
                    src={product.src}
                    alt=""
                  />
                </div>
                <div className="col product-name">
                  <h6 class="text-center">{product.name}</h6>
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
