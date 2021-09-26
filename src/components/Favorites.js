import React, { useEffect, useState } from "react";
import Products from "api/products.json";
import Product from "./ui/Product";

const Favorites = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <h3 className="text-sm font-semibold mb-3">Favorites</h3>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {products.length &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
