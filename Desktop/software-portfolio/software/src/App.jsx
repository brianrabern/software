import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import ResumePdf from "./ResumePdf";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resumepdf" element={<ResumePdf />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
