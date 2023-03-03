/** @format */

import {
  ADD_NEW_PRODUCT,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  REMOVE_FROM_CART,
} from "./actionTypes";

export const addNewProduct = ({ name, category, image, price, qty }) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: {
      name,
      category,
      image,
      price,
      qty,
    },
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
export const deleteCartItem = (id) => {
  return {
    type: DELETE_CART_ITEM,
    payload: id,
  };
};
