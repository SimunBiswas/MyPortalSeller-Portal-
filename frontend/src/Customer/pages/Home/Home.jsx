// have to import diffrent components from component and page have to
// responsiable

import React from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import BottomCategoryBanner from "./BottomCategoryBanner";
import CategoryBanner from "./CategoryBanner";
import Brand from "../../Components/Brand";

function Home() {
  return (
    <>
      <div>
        <CategoryBanner />
        <Banner1 />
        <Brand />
        <Banner2 />
        <Banner3 />
        <BottomCategoryBanner />
      </div>
    </>
  );
}

export default Home;
