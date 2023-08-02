import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./css/comman.css";
import Nav from "./components/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
