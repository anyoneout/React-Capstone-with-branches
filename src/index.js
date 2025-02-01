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
const domain = window.location.hostname;
let rootPath = "";
if (domain === "anyoneout.github.io") rootPath = "/React-Capstone-with-branches";
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path={`${rootPath}/`} element={<Home />} />
      <Route path={`${rootPath}/OaPage`} element={<OaPage />} />
      <Route path={`${rootPath}/BfPage`} element={<BfPage />} />
      <Route path={`${rootPath}/About`} element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);   