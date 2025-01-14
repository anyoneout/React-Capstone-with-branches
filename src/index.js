import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";


const root = createRoot(window.bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/OaPage" element={<OaPage />} />
      <Route path="/BfPage" element={<BfPage />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
);   