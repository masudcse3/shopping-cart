/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
const Header = ({ controlShow }) => {
  const products = useSelector((state) => state.products);
  const totoalItems = products
    .filter((product) => product.addedtocart > 0)
    .reduce((cart, product) => cart + product.addedtocart, 0);
  const handleShow = (show) => {
    controlShow(show);
  };
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a onClick={() => controlShow("home")} className="cursor-pointer">
          <img src="./logo.png" alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            onClick={() => handleShow("home")}
            className="navHome cursor-pointer"
            id="lws-home"
          >
            Home
          </a>
          <a
            onClick={() => handleShow("cart")}
            className="navCart cursor-pointer"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totoalItems}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
