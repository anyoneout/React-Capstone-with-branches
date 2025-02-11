import React from "react";
import oaBananaSplitR from "../img/OpenAiImages/oaBananaSplitR.jpg";
import oaBananaSplitI from "../img/OpenAiImages/oaBananaSplitI.jpg";
import oaCapreseSaladR from "../img/OpenAiImages/oaCapreseSaladR.jpg";
import oaCapreseSaladI from "../img/OpenAiImages/oaCapreseSaladI.jpg";
import oaCaesarSaladR from "../img/OpenAiImages/oaCaesarSaladR.png";
import oaCaesarSaladI from "../img/OpenAiImages/oaCaesarSaladI.png";
import oaBakedAlaskaR from "../img/OpenAiImages/oaBakedAlaskaR.png";
import oaBakedAlaskaI from "../img/OpenAiImages/oaBakedAlaskaI.png";
import bfBananaSplitR from "../img/BlackForestImages/bfBananaSplitR.jpg";
import bfBananaSplitI from "../img/BlackForestImages/bfBananaSplitI.jpg";
import bfCapreseSaladR from "../img/BlackForestImages/bfCapreseSaladR.jpg";
import bfCapreseSaladI from "../img/BlackForestImages/bfCapreseSaladI.jpg";

export default function Carousel() {
  return (
    <>
      <CarouselOpenAi />
      <CarouselBlackForest />
    </>
  )
}

export function CarouselOpenAi() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div id="carouselRecipes" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={oaBananaSplitR} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaCapreseSaladR} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaCaesarSaladR} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaBakedAlaskaR} className="carousel-images" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div id="carouselIngredients" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={oaBananaSplitI} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaCapreseSaladI} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaCaesarSaladI} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaBakedAlaskaI} className="carousel-images" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /*   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */

  )
}

export function CarouselBlackForest() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div id="carouselBfRecipes" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={bfBananaSplitR} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bfCapreseSaladR} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaCaesarSaladR} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaBakedAlaskaR} className="carousel-images" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div id="carouselIngredients" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={bfBananaSplitI} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={bfCapreseSaladI} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaCaesarSaladI} className="carousel-images" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={oaBakedAlaskaI} className="carousel-images" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}