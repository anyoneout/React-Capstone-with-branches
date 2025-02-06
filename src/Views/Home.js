import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeDalleIcon, HomeFluxIcon } from "../modules/icons";
import { Card } from "../components/Card";



export function Home() {

  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="ps-5 col-12 mt-5 col-md-8">
          <div className="row mt-5"></div>
          <div className="row mt-5 mb-3">
            <p className="display-4 fw-bold mt-5" style={{ color: "#fff78a" }}>
              Recipe Deconstructor
            </p>
          </div>
          <div className="row mt-3">
            <h1 className="display-3" style={{ color: "rgb(238, 238, 238)" }}>
              Separate dishes into their ingredients
            </h1>
          </div>
          <div className="row mt-4">
            <div className="col-12 d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-center justify-content-md-start p-2">
              <h4 style={{ color: "rgba(204, 98, 98, 0.925)" }}>Try here!</h4>
              <Link
                to="BfPage"
                className="btn btn-sm btn-outline-info ms-3 fw-bold me-2 icon"
              >
                Black Forest
              </Link>
              <Link
                to="OaPage"
                className="btn btn-sm btn-outline-info ms-1 fw-bold icon"
              >
                Dall-E-3
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2 d-flex flex-column align-items-center">
          <div
            className="card icon"
            style={{
              backgroundColor: "black",
              color: "white",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              height: "100px",
            }}
          >
            <HomeFluxIcon />
          </div>
          <Card src="./src/img/bfbsrecipe.jpg" />
          <Card src="./src/img/bfbsingredients.jpg" />
          <Card src="./src/img/bfcsrecipe.jpg" />
          <Card src="./src/img/bfcsingredients.jpg" />
        </div>

        <div className="col-12 col-md-2 d-flex flex-column align-items-center">
          <div
            className="card icon"
            style={{
              backgroundColor: "black",
              color: "white",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              height: "100px",
            }}
          >
            <HomeDalleIcon />
          </div>
          <Card src="./src/img/openaibsrecipe.jpg" />
          <Card src="./src/img/openaibsingredients.jpg" />
          <Card src="./src/img/openaicsrecipe.jpg" />
          <Card src="./src/img/openaicsingredients.jpg" />
        </div>
      </div>
    </div>
  );

  function componentDidMount() {
    setDidMount(true);
    console.log("The Home page component has mounted");
    document.title = "Recipe Deconstructor - Home";
    return componentDidUnmount;
  }

  function componentDidUpdate() {
    if (didMount) console.log("The component has updated");
  }

  function componentDidUnmount() {
    // I added this function to delay the unmount phase until the page changes. Without it,it was unmounting immediately so I replaced the greeting message from the lesson with the console.log to delay it.
    function delayedUnmount() {
      console.log("The component has unmounted");
    }
    return delayedUnmount;
  }
}
