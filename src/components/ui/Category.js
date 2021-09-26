import React from "react";

const Category = ({ category: { id, title, image } }) => {
  return (
    <a
      href="#"
      className="py-4 flex flex-col gap-y-2 items-center text-center group transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color">
        {title}
      </span>
    </a>
  );
};

export default Category;
