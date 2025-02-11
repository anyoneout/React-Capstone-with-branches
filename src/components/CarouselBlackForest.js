import React from "react";

import bfBananaSplitR from "../img/BlackForestImages/bfBananaSplitR.jpg";
import bfBananaSplitI from "../img/BlackForestImages/bfBananaSplitI.jpg";
import bfCapreseSaladR from "../img/BlackForestImages/bfCapreseSaladR.jpg";
import bfCapreseSaladI from "../img/BlackForestImages/bfCapreseSaladI.jpg";
import bfChickenKievR from "../img/BlackForestImages/bfChickenKievR.jpg";
import bfChickenKievI from "../img/BlackForestImages/bfChickenKievI.jpg";
import bfMinestroneR from "../img/BlackForestImages/bfMinestroneR.jpg";
import bfMinestroneI from "../img/BlackForestImages/bfMinestroneI.jpg";
import bfEggsBenedictR from "../img/BlackForestImages/bfEggsBenedictR.jpg";
import bfEggsBenedictI from "../img/BlackForestImages/bfEggsBenedictI.jpg";





export function CarouselBlackForest() {
  return (
    <>
      <div id="blackForestCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <img src={bfCapreseSaladR} className="carousel-images" alt="..." />
              <img src={bfCapreseSaladI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={bfBananaSplitR} className="carousel-images" alt="..." />
              <img src={bfBananaSplitI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={bfChickenKievR} className="carousel-images" alt="..." />
              <img src={bfChickenKievI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={bfMinestroneR} className="carousel-images" alt="..." />
              <img src={bfMinestroneI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={bfEggsBenedictR} className="carousel-images" alt="..." />
              <img src={bfEggsBenedictI} className="carousel-images" alt="..." />
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#blackForestCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#blackForestCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  )
}

