// have to make category card for category poster
//with fuctionlity to
// redirct '/product?category=cateogryname' to particlue page

import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import product from "./Images/product1.png";
const products = [
  { id: 1, src: product, alt: "Product not found", name: "KURTAS" },
  { id: 2, src: product, alt: "Product not found", name: "TOPS" },
  { id: 3, src: product, alt: "Product not found", name: "DRESSES" },
  { id: 4, src: product, alt: "Product not found", name: "SAREES" },
  { id: 4, src: product, alt: "Product not found", name: "SUITS" },
  { id: 4, src: product, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: product, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: product, alt: "Product not found", name: "LINGERIE" },
  { id: 4, src: product, alt: "Product not found", name: "LINGERIE" },
];

function CategoryBanner() {
  return (
    <Grid
      item
      lg={12}
      sm={12}
      xs={6}
      gap={4}
      style={{
        display: "flex",
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {products.map((product) => (
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          key={product.id}
        >
          <Avatar
            sx={{ width: 60, height: 60, marginBottom: "10px" }}
            alt=""
            src={product.src}
          />

          <Typography
            textAlign="center"
            fontSize={14}
            variant="h6"
            component="h6"
          >
            {product.name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoryBanner;
