/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/product/actions";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const handleCart = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={product.image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{product.name}</h4>
        <p className="lws-productCategory">{product.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{product.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{product.qty}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => handleCart(product.id)}
          disabled={product.qty === 0}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
