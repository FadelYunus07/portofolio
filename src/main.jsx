import ScrollToTop from "./components/ScrollToTop.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./dist/css/main.css";
import "flag-icon-css/css/flag-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
