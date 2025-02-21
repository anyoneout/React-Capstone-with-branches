import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { BfPage } from "./Views/BfPage";
import { OaPage } from "./Views/OaPage";
import { CollapsibleNavbar } from "./components/CollapsibleNavbar";

import Examples from "./Views/Examples";
import "../style.scss";
import SignInModal from "./components/SignInModal";
import SignOutModal from "./components/SignOutModal";
import SignInArea from "./controllers/SignInArea";

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
      <Route path={`${rootPath}/signin`} element={<SignInModal />} />
      <Route path={`${rootPath}/signinarea`} element={<SignInArea />} />

      <Route path={`${rootPath}/signout`} element={<SignOutModal />} />
      <Route path={`${rootPath}/BfPage`} element={<BfPage />} />
      <Route path={`${rootPath}/OaPage`} element={<OaPage />} />
      <Route path={`${rootPath}/Examples`} element={<Examples />} />
      <Route path={`${rootPath}/About`} element={<About />} />
      <Route path={`${rootPath}/SignInForm`} element={<SignInArea />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);   