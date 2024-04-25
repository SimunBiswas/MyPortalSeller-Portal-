// have to show all products with array gatting from redux
import React from "react";
// import { useState } from "react";

//---------- Sample data added in data folder -----------//

// import Data from "../../data/Products.json";

//-------------------------------------------------------//


// import ShopCategory from "./ShopCategory";
 import ProductCard from "./ProductCard";
// import Pagination from "./Pagination";
// import { Link } from "react-router-dom";

// const showResults = "Showing 01 -12 of 139 Results";

function Products() {
  // const [GridList, setGridList] = useState(true);
  // const [products, setProducts] = useState(Data);

  // // pagination
  // const [currPage, setCurrPage] = useState(1);

  // const productsPerPage = 12;

  // const indexOflastProductPage = currPage * productsPerPage;
  // const indexOfFirstProductPage = indexOflastProductPage - productsPerPage;
  // const currentProducts = products.slice(
  //   indexOfFirstProductPage,
  //   indexOflastProductPage
  // );

  // const paginate = (pageNumber) => {
  //   setCurrPage(pageNumber);
  // };

  //fliter product based on category
  // const [selectedCategory, setselectedCategory] = useState("All");
  // const menuItem = [...new Set(Data.map((val) => val.category))];
  // const filterItem = (currcat) => {
  //   const newItem = Data.filter((newVal) => {
  //     return newVal.category === currcat;
  //   });

  //   setselectedCategory(currcat);
  //   setProducts(newItem);
  // };

  return (

    <>
    <h1>Products</h1>
    <ProductCard/>
    </>
    // <div>
    //   <div className="products container">
    //     Refined by
    //     <ShopCategory
    //       filterItem={filterItem}
    //       setItems={setProducts}
    //       menuItem={menuItem}
    //       setProducts={setProducts}
    //       selectedCategory={selectedCategory}
    //     />
    //   </div>
    //   <div>
    //     {/* layout and title  */}
    //     <div className="shop-title d-flex flex-wrap justify-content-between">
    //       <p>{showResults}</p>
    //       <div
    //         className={`product-view-mode ${
    //           GridList ? "gridActive" : "listActive"
    //         }`}
    //       >
    //         <Link className="grid" onClick={() => setGridList(!GridList)}>
    //           <i className="icofont-ghost"></i>
    //         </Link>
    //         <Link className="list" onClick={() => setGridList(!GridList)}>
    //           <i className="icofont-listine-dots"></i>
    //         </Link>
    //       </div>
    //     </div>
    //     <ProductCart GridList={GridList} products={currentProducts} />
    //   </div>

    //   <Pagination
    //     productsPerPage={productsPerPage}
    //     totalProducts={products.length}
    //     paginate={paginate}
    //     activePage={currPage}
    //   />
    // </div>
  );
}

export default Products;
