import React from "react";
import { createRoot } from "react-dom/client";
import CISInfographicSite from "./components/CISInfographicSite.jsx";
import ExecutiveReportAdditions from "./components/ExecutiveReportAdditions.jsx";
import "./styles.css";
import "./executive-report-additions.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CISInfographicSite />
    <ExecutiveReportAdditions />
  </React.StrictMode>,
);
