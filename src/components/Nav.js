import React from "react";
import { NavLink } from "react-router-dom";

export function Nav() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "anyoneout.github.io") rootPath = "/React-Capstone-with-branches";
  return (
    <div className="container mb-5">
      <nav className="nav nav-pills mt-2">
        <div className="container">
          <div className="d-flex justify-content-center" >
            <NavLink to={`${rootPath}/`} end style={{ fontSize: "13px" }}
              className="nav-link text-info">
              Home
            </NavLink>
            <NavLink to={`${rootPath}/BfPage`} style={{ fontSize: "13px" }}
              className="nav-link text-info">
              Black Forest
            </NavLink>
            <NavLink to={`${rootPath}/OaPage`}
              style={{ fontSize: "13px" }}
              className="nav-link text-info">
              Dall-E-3
            </NavLink>
            <NavLink to={`${rootPath}/About`} style={{ fontSize: "13px" }}
              className="nav-link text-info">
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}
