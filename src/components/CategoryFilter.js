// src/components/CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  console.log("Current selected category:", selectedCategory); // Debugging log

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          data-testid={`category-${category}`} // Helps with testing
          onClick={() => {
            console.log("Category clicked:", category);
            onCategorySelect(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;