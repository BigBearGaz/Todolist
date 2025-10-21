// Filter.jsx
import React from "react";

const Filter = ({ activeFilter, onFilterChange }) => {
  const filters = ["Toutes", "À faire", "Terminées"];

  return (
    <div className="flex justify-center gap-4 mt-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-lg border font-medium transition-all ${
            activeFilter === filter
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
