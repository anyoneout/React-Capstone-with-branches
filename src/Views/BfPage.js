import React, { useEffect, useState } from "react";
import { ApiBlackForestIcon, ApiFluxIcon } from "../modules/icons";
import { bfRunAiFetch } from "../controllers/bfRunAiFetch";


export function BfPage() {

    const [didMount, setDidMount] = useState(false);

    useEffect(componentDidMount, []);
    useEffect(componentDidUpdate, [didMount]);
    useEffect(componentDidUnmount, []);

    return (
        <div className="container navbar-width">
            <div
                className="row text-end justify-content-end align-items-end"
                style={{
                    fontSize: "10px",
                    minHeight: "20px"
                }}>
                <div
                    id="userNameHTML">
                </div>
            </div>
            <div
                className="row text-end"
                style={{
                    fontSize: "10px",
                    minHeight: "20px"
                }}>
                <div
                    id="userEmailHTML">
                </div>
            </div >
            <div
                className="row"
                style={{ color: "#fff78a" }}>
                <div
                    className="col-12 d-flex  black-forest-font justify-content-start">
                    black forest labs.
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <ApiFluxIcon />
            </div>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-8 col-sm-6">
                    <form className="api-form">
                        <div
                            className="input-group mb-2"
                            data-bs-theme="dark">
                            <input
                                type="text"
                                className="form-control  api-inputs"
                                placeholder="Name"
                                aria-label="User Name"
                                aria-describedby="basic-addon1"
                                id="nameInput" />
                        </div>
                        <div
                            className="input-group mb-2"
                            data-bs-theme="dark">
                            <input
                                type="text"
                                className="form-control  api-inputs"
                                placeholder="Email"
                                aria-label="User email" aria-describedby="basic-addon2"
                                id="emailInput" />
                        </div>
                        <div
                            className="input-group mb-2"
                            data-bs-theme="dark">
                            <input
                                type="text"
                                className="form-control  api-inputs"
                                placeholder="Token"
                                aria-label="OpenAi Token Input" aria-describedby="basic-addon2"
                                id="hfTokenInput" />
                        </div>
                        <div
                            className="input-group"
                            data-bs-theme="dark">
                            <select
                                className="form-select  api-inputs"
                                id="chosenRecipe"
                                aria-label="Example select with button addon">
                                <option>Recipe...</option>
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
                                <option value="Beef Namtok">
                                    Beef Namtok
                                </option>
                                <option value="Steak Au Poivre">
                                    Steak Au Poivre
                                </option>
                                <option value="Steak Tartare">
                                    Steak Tartare
                                </option>
                                <option value="English Breakfast">
                                    English Breakfast
                                </option>
                                <option value="Ice Cream Sundae">
                                    Ice Cream Sundae
                                </option>
                                <option value="Pizza Margherita">
                                    Pizza Margherita
                                </option>
                            </select>
                            <button
                                className="btn btn-outline-secondary" type="button"
                                id="fetchButton"
                                onClick={bfRunAiFetch}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row mt-5">

                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
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

                <div className="col-12  d-none d-flex align-items-center justify-content-center">
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

                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div
                        className="spinner-border text-info"
                        role="status"
                        style={{ visibility: "hidden" }}
                        id="spinnerTwo"
                    >
                        <span className="visually-hidden"></span>
                    </div>
                    <img
                        id="ingredientsAI"
                        style={{ maxWidth: "100%" }} />
                </div>
            </div>


            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-10 col-md-8">
                    <div id="recipeIngredients"></div>
                </div>
            </div>
        </div >


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
