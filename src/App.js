import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.jsx";
import JobPosting from "./components/Jobs Posting/JobsPosting.jsx";
import Auth from "./components/Auth/Auth.jsx";
import Companies from "./components/Companies/Companies.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Homepage />} />
          <Route path="/job" element={<JobPosting />} />
          <Route path="/auth" element={<Auth />} />
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
