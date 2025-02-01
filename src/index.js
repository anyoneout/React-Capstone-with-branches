import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Nav } from "./Views/Nav";
import { About } from "./Views/About";
import { BfPage } from "./Views/BfPage";
import { OaPage } from "./Views/OaPage";


const bodyTag = document.getElementById("bodyTag");


const root = createRoot(bodyTag);
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/OaPage" element={<OaPage />} />
      <Route path="/BfPage" element={<BfPage />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  </BrowserRouter>
);   