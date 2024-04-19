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
];

// function CategoryBanner() {
//   return (
//     <Grid
//       lg={12}
//       sm={12}
//       xs={6}
//       gap={4}
//       mb={6}
//       style={{
//         display: "flex",
//         direction: "row",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {products.map((product) => (
//         <Grid
//           item
//           style={{
//             display: "flex",
//             flexDirection: "column",
//           }}
//           key={product.id}
//         >
//           <Avatar
//             sx={{ width: 60, height: 60, marginBottom: "10px" }}
//             alt=""
//             src={product.src}
//           />

//           <Typography
//             textAlign="center"
//             fontSize={14}
//             variant="h6"
//             component="h6"
//           >
//             {product.name}
//           </Typography>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default CategoryBanner;

import React from "react";

const CategoryBanner = () => {
  return (
    <>
      <div class="container ">
        <div class="row">
          <div class=" category-banner d-flex col-lg-12 col-md-4 col-sm-6 col-12 ">
            {products.map((product) => {
              return (
                <div class="product-item">
                  <div className="col product-img ">
                    <img
                      class="img-circle product-avatar"
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
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
};

export default CategoryBanner;
