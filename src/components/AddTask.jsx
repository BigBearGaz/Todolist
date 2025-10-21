import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = input.trim();
    if (trimmed === "") {
      alert("Veuillez entrer une tâche non vide.");
      return;
    }

    onAdd(trimmed);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 items-center mt-6 max-w-md mx-auto bg-white p-4 rounded-lg shadow-md"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nouvelle tâche..."
        className="flex-grow border border-gray-300 rounded-md px-4 py-2
                   text-gray-800 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   transition duration-300 ease-in-out"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md
                   shadow-md hover:bg-blue-700 hover:shadow-lg
                   transition duration-300 ease-in-out"
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddTask;
