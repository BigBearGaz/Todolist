// EditTask.jsx
import React, { useState } from "react";

const EditTask = ({ initialText, onSave, onCancel }) => {
  const [value, setValue] = useState(initialText);

  const handleSave = () => {
    if (value.trim() === "") return;
    onSave(value.trim());
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 border border-blue-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900"
        autoFocus
      />
      <button
        onClick={handleSave}
        className="px-3 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition shadow-sm"
        aria-label="Valider la modification"
      >
        ✓
      </button>
      <button
        onClick={onCancel}
        className="px-3 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition shadow-sm"
        aria-label="Annuler la modification"
      >
        ✕
      </button>
    </div>
  );
};

export default EditTask;
