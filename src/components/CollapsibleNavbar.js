import React from "react";
import { NavLink } from "react-router-dom";
import "./CollapsibleNavbar.scss";
import "../../style.scss"
import { NavDalleIcon, NavFluxIcon } from "../modules/icons";

export function CollapsibleNavbar() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "anyoneout.github.io") rootPath = "/React-Capstone-with-branches";
  return (
    <nav className="navbar mb-3 mt-4 py-0">
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


        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/`}
                end
                className="nav-link">
                <i className="bi-house-door-fill me-2"></i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/BfPage`}
                className="nav-link">
                <span className="me-2"><NavFluxIcon /></span>Black Forest
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/OaPage`}
                className="nav-link">
                <span className="me-2"><NavDalleIcon /></span>OpenAI
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/Examples`}
                className="nav-link">
                <i className="bi bi-images me-2"></i>Examples
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/About`}
                className="nav-link">
                <i className="bi-file-person me-2"></i>About
              </NavLink>
            </li>
            {/*  <li className="nav-item">
              <NavLink
                to={`${rootPath}/SignInForm`}
                className="nav-link">
                <i className="bi-door-open me-2"></i>Sign In
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>


  )
}
