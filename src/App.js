import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.jsx";
import JobPosting from "./components/Jobs Posting/JobsPosting.jsx";
import Auth from "./components/Auth/Auth.jsx";
import Companies from "./components/Companies/Companies.js";
import ForgotPassword from "./components/forgot-password/forgot-password.jsx";
import ConfirmCode from "./components/forgot-password/confirm-code.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Homepage />} />
          <Route path="/job" element={<JobPosting />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/fp" element={<ForgotPassword />} />
          <Route path="/cc" element={<ConfirmCode />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/profile" element={<Auth />} />
          <Route path="/messages" element={<Auth />} />
          <Route path="/saved" element={<Auth />} />
          <Route path="/settings" element={<Auth />} />
          <Route path="/settings" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
