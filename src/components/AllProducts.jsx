/** @format */

import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
const AllProducts = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="productContainer" id="lws-productContainer">
      {products.length > 0
        ? products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))
        : "There is no product. please add one"}
    </div>
  );
};

export default AllProducts;
