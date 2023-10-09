import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Todos from "./components/Todos.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Todos />
  </React.StrictMode>
);
