import React from "react";

const CategorySelection = ({
  onSelectedCategory,
  selectedCategory,
  activeCagtegory,
}) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900f font-semibold">
      <button
        onClick={() => onSelectedCategory(null)}
        className={`lg:ml-12 ${activeCagtegory ? "" : "active-button"}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => onSelectedCategory(category)}
          className={`mr-2 space-x-16 ${
            activeCagtegory === category ? "active-button" : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
