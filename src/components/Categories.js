import React, { useEffect, useState } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3 px-6 md:px-0">Categories</h3>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-11 ">
          {categories &&
            categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
