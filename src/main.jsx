import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { HeroesApp } from "./HeroesApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HeroesApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
