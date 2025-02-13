import React from "react";
import { CarouselOpenAi } from "../components/CarouselOpenAi";
import { CarouselBlackForest } from "../components/CarouselBlackForest";
import { CarouselDalleIcon, CarouselFluxIcon } from "../modules/icons";

export default function Examples() {
  return (
    <div className="container navbar-width carousel-container mt-5">
      <div className="row mt-5">
        <div className="col-1 carousel-icons"><CarouselDalleIcon /></div>
        <div className="col-11"><CarouselOpenAi /></div>
      </div>
      <div className="row mt-2">
        <div className="col-1 carousel-icons"><CarouselFluxIcon /></div>
        <div className="col-11"><CarouselBlackForest /></div>
      </div>
    </div >
  )
}