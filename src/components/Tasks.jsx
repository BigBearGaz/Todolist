// Tasks.jsx
import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import ValideTask from "./ValideTask";
import Filter from "./Filter";
import Progression from "./Progression";
import EditTask from "./EditTask";
import RemoveTask from "./RemoveTask";

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState(() => {
    const savedFilter = localStorage.getItem("filter");
    return savedFilter || "Toutes";
  });

  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  const handleAddTask = (newTask) => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask.trim(), completed: false }]);
  };

  const handleToggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleStartEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (index, newText) => {
    if (newText.trim() === "") return;
    setTasks(
      tasks.map((task, i) => (i === index ? { ...task, text: newText } : task))
    );
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "À faire") return !task.completed;
    if (filter === "Terminées") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 py-12 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-blue-200">
        <h1 className="text-center text-4xl font-extrabold text-blue-700 mb-10 drop-shadow-md select-none">
          Ma Todo App
        </h1>

        <AddTask onAdd={handleAddTask} />
        <Filter activeFilter={filter} onFilterChange={setFilter} />
        <Progression total={tasks.length} completed={completedCount} />

        {filteredTasks.length === 0 ? (
          <p className="mt-12 text-center text-gray-500 italic text-lg select-none">
            Aucune tâche pour le moment. Ajoute-en une !
          </p>
        ) : (
          <ul className="mt-10 space-y-4">
            {filteredTasks.map((task, index) => {
              const globalIndex = tasks.indexOf(task);
              const isEditing = editingIndex === globalIndex;
              return (
                <li
                  key={index}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl shadow-md border transition-colors duration-300 cursor-default select-none ${
                    task.completed
                      ? "bg-green-50 border-green-300"
                      : "bg-white border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  {isEditing ? (
                    <EditTask
                      initialText={task.text}
                      onSave={(newText) => handleSaveEdit(globalIndex, newText)}
                      onCancel={handleCancelEdit}
                    />
                  ) : (
                    <>
                      <div className="flex items-center gap-4 flex-1 cursor-pointer">
                        <ValideTask
                          completed={task.completed}
                          onToggle={() => handleToggleTask(globalIndex)}
                        />
                        <span
                          className={`text-lg ${
                            task.completed
                              ? "line-through text-gray-400"
                              : "text-gray-900 font-semibold"
                          }`}
                        >
                          {task.text}
                        </span>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => handleStartEdit(globalIndex)}
                          className="px-3 py-2 text-sm rounded-lg bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition-shadow shadow-sm"
                          aria-label={`Éditer la tâche ${task.text}`}
                        >
                          ✏️
                        </button>

                        <RemoveTask
                          onConfirm={() => handleDeleteTask(globalIndex)}
                        />
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tasks;
