// Progression.jsx
import React from "react";

const Progression = ({ total, completed }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  const remaining = total - completed;

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
        <p className="text-center sm:text-left text-gray-700 font-medium">
          {total === 0
            ? "Aucune tâche pour le moment"
            : `${remaining} / ${total} tâche${total > 1 ? "s" : ""} restante${
                remaining > 1 ? "s" : ""
              }`}
        </p>
        <p className="text-center sm:text-right text-blue-700 font-semibold mt-1 sm:mt-0">
          {percentage}%
        </p>
      </div>

      <div className="w-full bg-blue-100 rounded-full h-4 shadow-inner overflow-hidden">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progression;
