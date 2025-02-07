
import "./CollapsibleNavbar.scss";

import React from "react";
import { NavLink } from "react-router-dom";

export function CollapsibleNavbar() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "anyoneout.github.io") rootPath = "/React-Capstone-with-branches";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black mb-5">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span
            className="navbar-toggler-icon">
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/`}
                end
                style={{ fontSize: "15px", fontWeight: "bold" }}
                className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/BfPage`}
                style={{ fontSize: "15px", fontWeight: "bold" }}
                className="nav-link">
                Black Forest
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/OaPage`}
                style={{ fontSize: "15px", fontWeight: "bold" }}
                className="nav-link">
                Dall-E-3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/About`}
                style={{ fontSize: "15px", fontWeight: "bold" }}
                className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
