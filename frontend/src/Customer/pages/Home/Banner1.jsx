// Aditiya 16/04

import React from "react";
import CategoryBanner from "./CategoryBanner";
import { Grid } from "@mui/material";

const Banner1 = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      p="16px"
      backgroundColor="#c9e4d5"
      color="#fff"
      direction="row"
    >
      <CategoryBanner />
    </Grid>
  );
};

export default Banner1;
