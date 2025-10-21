// ValideTask.jsx
import React from "react";

const ValideTask = ({ completed, onToggle }) => {
  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={onToggle}
      className="h-5 w-5 accent-blue-600 cursor-pointer"
      aria-label={completed ? "Tâche terminée" : "Tâche non terminée"}
    />
  );
};

export default ValideTask;
