import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LungHealthForm from "./pages/diagnosis/LungHealthForm";
import DiagnosticResultsPage from "./pages/results/DiagnosticResultsPage";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/login/LoginPage";
import AddPatient from "./pages/create-patient/AddPatient";
import NotFound from "./components/not-found/NotFound";
import PatientRecords from "./pages/patients/PatientRecords";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-patient" element={<AddPatient />} />
        <Route path="/patients" element={<PatientRecords />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diagnose" element={<LungHealthForm />} />
        <Route path="/results" element={<DiagnosticResultsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
