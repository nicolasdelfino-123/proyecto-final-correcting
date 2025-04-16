// index.js
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import injectContext from "./store/appContext"; // Importa el contexto

import App from "./App";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Envuelve tu componente App con el contexto global
const AppWithContext = injectContext(App);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppWithContext />{" "}
    {/* Aquí pasamos el componente ya envuelto con el contexto */}
  </StrictMode>
);
