import React, { useEffect, useState } from "react";
import { deleteShoppingCart } from "../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import OrderData from "../orderdData/OrderData";
const Cart = ({ children }) => {
  const data = OrderData();
  let totalCalculation = data.reduce(
    (pre, ele) => {
      const { totalPrice, totalQuantity, totalShiping } = pre || {};
      const { price, quantity, shipping } = ele || {};
      const calculat = {
        totalPrice: totalPrice + price * quantity,
        totalQuantity: totalQuantity + quantity,
        totalShiping: totalShiping + shipping,
      };
      return calculat;
    },
    {
      totalPrice: 0,
      totalQuantity: 0,
      totalShiping: 0,
    }
  );
  const { totalPrice, totalQuantity, totalShiping } = totalCalculation;
  const text = +((totalPrice * 7) / 100).toFixed(2);

  const grandTotal = totalPrice + totalShiping + text;

  const clearCart = () => {
    deleteShoppingCart();
  };

  return (
    <div className="bg-[#FF99004D]  pb-6 rounded-b-lg">
      <h2 className="text-3xl text-center pt-4 font-semibold">Order Summary</h2>
      <div className="px-6 mt-10">
        <p className="mb-2 text-lg">Selected Items:{totalQuantity}</p>
        <p className="mb-2 text-lg">Total Price :${totalPrice}</p>
        <p className="mb-2 text-lg">Total Shipping Charge :${totalShiping}</p>
        <p className="mb-2 text-lg">Text :${text}</p>
        <h1 className="font-semibold text-2xl">Grad Total:${grandTotal}</h1>
        <button
          className="btn btn-error w-full text-white my-4"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
