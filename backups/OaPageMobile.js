import React, { useEffect, useState } from "react";
import { oaRunAiFetch } from "../src/controllers/oaRunAiFetch";
import { ApiDalleIcon } from "../src/modules/icons";

export default function OaPageMobile() {
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container navbar-width">
      <div className="row mt-4">
        <div className="col">
          <div
            className="display-4 fw-bold d-flex align-items-end"
            style={{ color: "#fff78a" }}
          >
            OpenAI
          </div>
        </div>
      </div>
      <div className="row">

        <form>
          <div className="d-flex ">
            <div className="input-group">
              <label htmlFor="nameInput" className="form-label">
                Full Name:
                <input
                  type="text"
                  id="nameInput"
                  className="form-control"
                  placeholder="John Doe"
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="emailInput" className="form-label">
                Email:
                <input
                  type="email"
                  id="emailInput"
                  className="form-control"
                  placeholder="name@domain.com"
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="openAiTokenInput">
                OpenAI Token:
                <input
                  className="form-control"
                  type="text"
                  id="openAiTokenInput"
                />
              </label>
            </div>

            <div className="dropdown" data-bs-theme="dark">
              <label htmlFor="chosenRecipe">Recipes:</label>
              <select
                className="form-select mb-2"
                name="chosenRecipe"
                id="chosenRecipe"
              >
                <option value="Caprese Salad">
                  Caprese Salad
                </option>
                <option value="Trout Grenobloise">
                  Trout Grenobloise
                </option>
                <option value="Baked Alaska">
                  Baked Alaska
                </option>
                <option value="Artichoke Gratin">
                  Artichoke Gratin
                </option>
                <option value="Minestrone Soup">
                  Minestrone Soup
                </option>
                <option value="Spaghetti Vongole">
                  Spaghetti Vongole
                </option>
                <option value="Beef Stroganoff">
                  Beef Stroganoff
                </option>
                <option value="Chicken Kiev">
                  Chicken Kiev
                </option>
                <option value="Ceasar Salad">
                  Caesar Salad
                </option>
                <option value="Osso Bucco">
                  Osso Bucco
                </option>
                <option value="Salmon Teriyaki">
                  Salmon Teriyaki
                </option>
                <option value="Pad Thai">Pad Thai</option>
                <option value="Eggs Benedict">
                  Eggs Benedict
                </option>
                <option value="Lasagna">Lasagna</option>
                <option value="Ice Cream Sundae">
                  Ice Cream Sundae
                </option>
                <option value="Pizza Margherita">
                  Pizza Margherita
                </option>
              </select>
              <button
                type="button"
                id="fetchButton"
                onClick={oaRunAiFetch}
                className="btn btn-sm btn-outline-info mt-2"
              >
                Generate
              </button>
            </div>
          </div>
        </form>

      </div>
      <div className="row mt-5 d-flex">
        <div className="col-12 col-md-2">

        </div>
        <div className="col-1"></div>
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-info"
            role="status"
            style={{ visibility: "hidden" }}
            id="spinnerOne"
          >
            <span className="visually-hidden"></span>
          </div>
          <img
            id="recipeAI"
            className="rounded-circle"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-1 d-flex align-items-center justify-content-center">
          <i
            className="bi bi-arrow-right"
            id="secondArrowHTML"
            style={{
              fontSize: "3rem",
              color: "#f1ffb0",
              visibility: "hidden",
            }}
          ></i>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-info"
            role="status"
            style={{ visibility: "hidden" }}
            id="spinnerTwo"
          >
            <span className="visually-hidden"></span>
          </div>
          <img id="ingredientsAI" style={{ maxWidth: "100%" }} />
        </div>
      </div>

      <div className="row" style={{ minHeight: "15vh" }}>
        <div className="col-3 align-items-start d-flex">
          <ApiDalleIcon />
        </div>
        <div className="col-4 d-flex align-items-start justify-content-center">
          <p
            id="recipeName"
            className="display-6"
            style={{ color: "#f1ffb0" }}
          ></p>
        </div>
        <div className="col-1"></div>
        <div className="col-4 d-flex align-items-start justify-content-start">
          <div
            id="recipeIngredients"
            className="ms-5"
            style={{ color: "#f1ffb0", width: "75%" }}
          ></div>
        </div>
      </div>

    </div>

  );

  function componentDidMount() {
    setDidMount(true);
    console.log("The OaPage page component has mounted");
    document.title = "Recipe Deconstructor - Open AI Dall-E-3";
    return componentDidUnmount;
  }

  function componentDidUpdate() {
    if (didMount) console.log("component has updated");
  }

  function componentDidUnmount() {
    // I added this function to delay the unmount phase until the page changes. Without it,it was unmounting immediately so I replaced the greeting message from the lesson with the console.log to delay it.
    function delayedUnmount() {
      console.log("component has unmounted")
    }
    return delayedUnmount;
  }
}