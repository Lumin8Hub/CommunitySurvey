import React from "react";
import { createRoot } from "react-dom/client";
import CISInfographicSite from "./components/CISInfographicSite.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CISInfographicSite />
  </React.StrictMode>,
);
