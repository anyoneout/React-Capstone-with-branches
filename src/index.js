import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { BfPage } from "./Views/BfPage";
import { OaPage } from "./Views/OaPage";
import { Nav } from "./components/Nav";
import "../style.scss";
import { CollapsibleNavbar } from "./components/CollapsibleNavbar";


const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
const domain = window.location.hostname;
let rootPath = "";
if (domain === "anyoneout.github.io") rootPath = "/React-Capstone-with-branches";
root.render(
  <BrowserRouter>
    <CollapsibleNavbar />
    <Routes>
      <Route path={`${rootPath}/`} element={<Home />} />
      <Route path={`${rootPath}/OaPage`} element={<OaPage />} />
      <Route path={`${rootPath}/BfPage`} element={<BfPage />} />
      <Route path={`${rootPath}/About`} element={<About />} />
      <Route path={`${rootPath}/ColNav`} element={<CollapsibleNavbar />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);   