/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteCartItem,
  removeFromCart,
} from "../redux/product/actions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleIncrement = (id) => {
    dispatch(addToCart(id));
  };
  const handleDecrement = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteCartItem(id));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={product.image} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{product.name}</h4>
          <p className="lws-cartCategory">{product.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{product.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => handleIncrement(product.id)}
            disabled={product.qty === 0}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{product.addedtocart}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => handleDecrement(product.id)}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">
            {product.addedtocart * product.price}
          </span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => handleDelete(product.id)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
