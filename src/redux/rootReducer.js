/** @format */

import { combineReducers } from "redux";
import productReducer from "./product/reducer";

const reducer = combineReducers({
  products: productReducer,
});

export default reducer;
