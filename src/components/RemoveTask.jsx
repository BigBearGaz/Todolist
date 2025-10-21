// RemoveTask.jsx
import React, { useState } from "react";

const RemoveTask = ({ onConfirm }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    onConfirm();
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleDeleteClick}
        className="px-3 py-2 text-sm rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-shadow shadow-sm"
      >
        Supprimer
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-11/12 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
              Confirmer la suppression
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Es-tu sûr de vouloir supprimer cette tâche ? Cette action est
              irréversible.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold transition"
              >
                Confirmer
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 font-semibold transition"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RemoveTask;
