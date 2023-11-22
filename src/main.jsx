import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./dist/css/main.css";
import "flag-icon-css/css/flag-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
