import React from "react";
import Cart from "./Cart";
import OrderData from "../orderdData/OrderData";

const OrderReview = () => {
  const data = OrderData();

  return (
    <div className="flex container justify-between gap-4 mx-auto">
      {data.map((p) => (
        <div className=" flex flex-row items-center gap-4 mt-3 rounded shadow-xl w-full h-fit">
          <div className="p-4">
            <img src={p.img} alt="hallo" className="bg-gray-300 rounded p-4" />
          </div>
          <div>
            <p>name:hallo</p>
            <p>price:hallo</p>
            <p>Shipping Charge:hallo</p>
          </div>
        </div>
      ))}
      <div>
        <Cart>
          <button className="btn btn-error w-full text-white">
            Procced Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
