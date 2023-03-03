/** @format */

import React from "react";
import AllProducts from "./AllProducts";
import AddProduct from "./AddProduct";
const Main = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <AllProducts />
        <div>
          <AddProduct />
        </div>
      </div>
    </main>
  );
};

export default Main;
