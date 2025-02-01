import React from "react";
import { Link, NavLink } from "react-router";

export function Nav() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "anyoneout.github.io") rootPath = "/React-Capstone-with-branches";
  return (
    <nav className="nav nav-pills">
      <div className="container mt-3">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="d-flex justify-content-evenly align-items-end" >
              <NavLink to={`${rootPath}/`} style={{ fontSize: "13px" }}
                className="nav-link link-underline-opacity-0 link-underline text-info">
                Home
              </NavLink>|
              <NavLink to={`${rootPath}/BfPage`} style={{ fontSize: "13px" }}
                className="nav-link link-underline-opacity-0 link-underline text-info">Black Forest
              </NavLink>|
              <NavLink to={`${rootPath}/OaPage`}
                style={{ fontSize: "13px" }}
                className="nav-link link-underline-opacity-0 link-underline text-info">Dall-E-3
              </NavLink>|
              <NavLink to={`${rootPath}/About`} style={{ fontSize: "13px" }}
                className="nav-link link-underline-opacity-0 link-underline text-info">
                About
              </NavLink>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </nav>
  )
}
