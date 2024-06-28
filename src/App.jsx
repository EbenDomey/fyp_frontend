import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LungHealthForm from "./LungHealthForm";
import DiagnosticResultsPage from "./DiagnosticResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LungHealthForm />} />
        <Route path="/results" element={<DiagnosticResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
