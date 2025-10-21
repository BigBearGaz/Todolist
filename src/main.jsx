import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // <-- le fichier créé à l’étape 1
import Tasks from "./components/Tasks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Tasks />
  </React.StrictMode>
);
