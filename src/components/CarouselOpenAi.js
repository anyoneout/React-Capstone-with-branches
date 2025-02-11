import React from "react";
import oaBananaSplitR from "../img/OpenAiImages/oaBananaSplitR.jpg";
import oaBananaSplitI from "../img/OpenAiImages/oaBananaSplitI.jpg";
import oaCapreseSaladR from "../img/OpenAiImages/oaCapreseSaladR.jpg";
import oaCapreseSaladI from "../img/OpenAiImages/oaCapreseSaladI.jpg";
import oaChickenKievR from "../img/OpenAiImages/oaChickenKievR.png";
import oaChickenKievI from "../img/OpenAiImages/oaChickenKievI.png";
import oaMinestroneR from "../img/OpenAiImages/oaMinestroneR.png";
import oaMinestroneI from "../img/OpenAiImages/oaMinestroneI.png";
import oaEggsBenedictR from "../img/OpenAiImages/oaEggsBenedictR.png";
import oaEggsBenedictI from "../img/OpenAiImages/oaEggsBenedictI.png";
import oaCaesarSaladR from "../img/OpenAiImages/oaCaesarSaladR.png";
import oaCaesarSaladI from "../img/OpenAiImages/oaCaesarSaladI.png";
import oaBakedAlaskaR from "../img/OpenAiImages/oaBakedAlaskaR.png";
import oaBakedAlaskaI from "../img/OpenAiImages/oaBakedAlaskaI.png";

export function CarouselOpenAi() {
  return (
    <>
      <div id="OpenAiCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <img src={oaCapreseSaladR} className="carousel-images" alt="..." />
              <img src={oaCapreseSaladI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={oaBananaSplitR} className="carousel-images" alt="..." />
              <img src={oaBananaSplitI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={oaChickenKievR} className="carousel-images" alt="..." />
              <img src={oaChickenKievI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={oaMinestroneR} className="carousel-images" alt="..." />
              <img src={oaMinestroneI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={oaEggsBenedictR} className="carousel-images" alt="..." />
              <img src={oaEggsBenedictI} className="carousel-images" alt="..." />
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#OpenAiCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#OpenAiCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

    </>
  )
}
