import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";

const OrderData = () => {
  const [sevedDdata, setSevedData] = useState([]);
  const getFromDb = getShoppingCart();
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setSevedData(data));
  }, [getFromDb]);

  const addedProduct = [];

  for (let product in getFromDb) {
    const getAddedProduct = sevedDdata.find((p) => p.id === product);
    if (getAddedProduct) {
      getAddedProduct.quantity = getFromDb[product];
      addedProduct.push(getAddedProduct);
    }
  }
  return addedProduct;
};

export default OrderData;
