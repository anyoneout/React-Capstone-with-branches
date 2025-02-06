import React from "react";
import oaBsRecipe from "../img/openaibsrecipe.jpg";
import oaBsIngredients from "../img/openaibsingredients.jpg";
import oaCsRecipe from "../img/openaicsrecipe.jpg";
import oaCsIngredients from "../img/openaicsingredients.jpg";

export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={oaBsRecipe} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={oaBsIngredients} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item active">
          <img src={oaCsRecipe} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={oaCsIngredients} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}