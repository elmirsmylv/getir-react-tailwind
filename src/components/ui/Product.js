import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Product = ({ product }) => {
  return (
    <div className="bg-white flex flex-col items-center gap-y-1 text-center text-sm font-semibold p-3 relative">
      <button className="absolute top-3 right-3 w-8 h-8 flex text-lg font-semibold items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md bg-white hover:border-brand-color">
        +
      </button>

      <img src={product.image} className="" />
      <div className=" text-brand-color">{product.price}</div>
      <div className=" text-gray-800">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
};

export default Product;
