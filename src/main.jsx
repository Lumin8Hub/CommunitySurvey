import React from "react";
import { createRoot } from "react-dom/client";
import InteractiveReportSite from "./components/InteractiveReportSite.jsx";
import "./styles.css";
import "./executive-report-additions.css";
import "./interactive-report.css";
import "./canada-map.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InteractiveReportSite />
  </React.StrictMode>,
);
