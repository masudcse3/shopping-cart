/** @format */

import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import BillDetails from "./BillDetails";
const Cart = () => {
  let products = useSelector((state) => state.products);
  products = products.filter((product) => product.addedtocart > 0);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>

          {/* <!-- Bill Details --> */}
          <BillDetails />
        </div>
      </div>
    </main>
  );
};

export default Cart;
