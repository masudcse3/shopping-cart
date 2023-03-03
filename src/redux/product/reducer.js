/** @format */

import {
  ADD_NEW_PRODUCT,
  ADD_TO_CART,
  DELETE_CART_ITEM,
  REMOVE_FROM_CART,
} from "./actionTypes";

const idGenerator = (state) => {
  const maxId = state.reduce(
    (maxid, product) => Math.max(product.id, maxid),
    -1
  );
  return maxId + 1;
};
const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      const { name, category, image, price, qty } = action.payload;
      return [
        ...state,
        {
          id: idGenerator(state),
          name,
          category,
          image,
          price: Number(price),
          qty: Number(qty),
          addedtocart: 0,
        },
      ];
    case ADD_TO_CART:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            qty: product.qty > 0 ? Number(product.qty - 1) : 0,
            addedtocart: Number(product.addedtocart + 1),
          };
        }
        return product;
      });
    case REMOVE_FROM_CART:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            qty: Number(product.qty + 1),
            addedtocart: Number(product.addedtocart - 1),
          };
        }
        return product;
      });
    case DELETE_CART_ITEM:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            addedtocart: 0,
          };
        }
        return product;
      });

    default:
      return state;
  }
};

export default productReducer;
