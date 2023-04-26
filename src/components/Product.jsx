import React from "react";
import {addToDb} from "../utilities/fakedb"


const Product = ({ products }) => {
  const {id,name,price,ratings,img,seller}=products||{}
  const cartHandler=()=>{
    addToDb(id)
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex">
      <figure>
        <img src={img} alt="Product"  />
      </figure>
      <div className="card-body relative">
        <h2 className="card-title">{name}</h2>
        <h2 className="text-xl ">Price:${price}</h2>
        <div>
          <p className="mb-1">Manufacturer:{seller}</p>
          <p>Rating:{ratings} Stars</p>
        </div>
        <div className="card-actions justify-end relative bottom-0">
          <button className="btn btn-primary" onClick={cartHandler} >Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
