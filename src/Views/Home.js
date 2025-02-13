import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeDalleIcon, HomeFluxIcon } from "../modules/icons";
import Card from "../components/Card";
import "../../style.scss"



export function Home() {

  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container navbar-width">
      <div className="row text-start mt-md-5">
        <div className="col-12 mt-5">
          <p className="display-3 fw-bold " style={{ color: "#fff78a" }}>
            Recipe Deconstructor
          </p>
          <h1 className="display-3 " style={{ color: "rgb(238, 238, 238)" }}>
            Separate dishes into their ingredients
          </h1>
        </div>
        <div className="col-12 mt-4 try-section">
          <h4 style={{ color: "rgba(204, 98, 98, 0.925)" }}>Try here!</h4>
          <Link to="BfPage" className="btn btn-sm btn-outline-info ms-3 fw-bold me-2 icon">
            Black Forest
          </Link>
          <Link to="OaPage" className="btn btn-sm btn-outline-info ms-1 fw-bold icon">
            Dall-E-3
          </Link>
        </div>
      </div>


      <div className="row mt-5">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <div className="card icon bg-black d-flex text-white align-items-center justify-content-center">
            <HomeFluxIcon />
          </div>
          <div className="image-border mt-5">
            <Card src="./src/img/BlackForestImages/bfBananaSplitR.jpg" id="bfBsR" tooltipTitle={"<b>Banana Split</b><br><i>recipe</i>"} tooltipPlacement="left" />
            <Card src="./src/img/BlackForestImages/bfBananaSplitI.jpg" id="bfBsI" tooltipTitle={"<b>Banana Split</b><br><i>ingredients</i>"} tooltipPlacement="left" />
          </div>
          <div className="image-border mt-5">
            <Card src="./src/img/BlackForestImages/bfCapreseSaladR.jpg" id="bfCsR" tooltipTitle={"<b>Caesar Salad</b><br><i>recipe</i>"} tooltipPlacement="left" />
            <Card src="./src/img/BlackForestImages/bfCapreseSaladI.jpg" id="bfCsI" tooltipTitle={"<b>Caesar Salad</b><br><i>ingredients</i>"} tooltipPlacement="left" />
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
          <div className="card icon bg-black text-white d-flex align-items-center justify-content-center">
            <HomeDalleIcon />
          </div>
          <div className="image-border mt-5">
            <Card src="./src/img/OpenAiImages/oaBananaSplitR.jpg" id="oaBsR" tooltipTitle={"<b>Banana Split</b><br><i>Recipe</i>"} tooltipPlacement="right" />
            <Card src="./src/img/OpenAiImages/oaBananaSplitI.jpg" id="oaBsI" tooltipTitle={"<b>Banana Split</b><br><i>ingredients</i>"} tooltipPlacement="right" />
          </div>
          <div className="image-border mt-5">
            <Card src="./src/img/OpenAiImages/oaCapreseSaladR.jpg" id="oaCsR" tooltipTitle={"<b>Caesar Salad</b><br><i>Recipe</i>"} tooltipPlacement="right" />
            <Card src="./src/img/OpenAiImages/oaCapreseSaladI.jpg" id="oaCsI" tooltipTitle={"<b>Caesar Salad</b><br><i>ingredients</i>"} tooltipPlacement="right" />
          </div>
        </div>
      </div>
    </div>
  );



  function componentDidMount() {

    setDidMount(true);
    console.log("The Home page component has mounted");
    document.title = "Recipe Deconstructor - Home";

    const bfBsR = document.getElementById("bfBsR");
    new bootstrap.Tooltip(bfBsR, { html: true, sanitize: false });
    const bfBsI = document.getElementById("bfBsI");
    new bootstrap.Tooltip(bfBsI, { html: true, sanitize: false });
    const bfCsR = document.getElementById("bfCsR");
    new bootstrap.Tooltip(bfCsR, { html: true, sanitize: false });
    const bfCsI = document.getElementById("bfCsI");
    new bootstrap.Tooltip(bfCsI, { html: true, sanitize: false });
    const oaBsR = document.getElementById("oaBsR");
    new bootstrap.Tooltip(oaBsR, { html: true, sanitize: false });
    const oaBsI = document.getElementById("oaBsI");
    new bootstrap.Tooltip(oaBsI, { html: true, sanitize: false });
    const oaCsR = document.getElementById("oaCsR");
    new bootstrap.Tooltip(oaCsR, { html: true, sanitize: false });
    const oaCsI = document.getElementById("oaCsI");
    new bootstrap.Tooltip(oaCsI, { html: true, sanitize: false });

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
