import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.jsx";
import JobPosting from "./components/Jobs Posting/JobsPosting.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Homepage />} />
          <Route path="/job" element={<JobPosting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
