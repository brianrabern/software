import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import ResumePdf from "./ResumePdf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resumepdf" element={<ResumePdf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
