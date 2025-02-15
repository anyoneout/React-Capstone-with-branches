import React, { useEffect, useState } from "react";
import { CarouselOpenAi } from "../components/CarouselOpenAi";
import { CarouselBlackForest } from "../components/CarouselBlackForest";
import { CarouselDalleIcon, CarouselFluxIcon } from "../modules/icons";

export default function Examples() {

  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

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

