import React, { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="flex container mx-auto  gap-x-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
          {products.slice(0, 10).map((p) => (
            <Product key={p.id} products={p} />
          ))}
        </div>
        <div>
          <Cart>
            <Link to="orderReview">
              <button className="btn btn-error w-full text-white">
                Review Order
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Products;
