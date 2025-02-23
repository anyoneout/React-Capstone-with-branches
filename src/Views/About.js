import React, { useEffect, useState } from "react";
import "../../style.scss"
import aboutMeImage from "../../assets/images/AboutMe.jpg"


export function About() {

  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container mt-5">
      <div className="row mt-0 mt-md-5"></div>
      <div className="row justify-content-center spacing mt-sm-5">
        <div className="col-8 col-md-6 col-lg-5 col-xl-3">
          <div className="card text-center" style={{ backgroundColor: "black" }}>
            <img src={aboutMeImage}
              className="rounded-circle card-img-top  pt-3 "
              alt="" />
            <div className="card-body">
              <div
                className="card-title display-6 d-flex justify-content-center text-light">
                Chris Ali</div>
              <div
                className="card-text text-light justify-content-center d-flex">
                Student</div>
              <div
                className="card-text justify-content-center d-flex">
                <a href="mailto: chrisdafur@gmail.com"
                  className="text-info">chrisdafur@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  function componentDidMount() {
    setDidMount(true);
    console.log("The About page component has mounted");
    document.title = "Recipe Deconstructor - About";
  }

  function componentDidUpdate() {
    if (didMount) console.log("component had updated");
  }

  function componentDidUnmount() {
    // I added this function to delay the unmount phase until the page changes. Without it,it was unmounting immediately so I replaced the greeting message from the lesson with the console.log to delay it.
    function delayedUnmount() {
      console.log("component has unmounted")
    }
    return delayedUnmount;
  }
}
