import React, { useEffect, useState } from "react";
import SignInModal from "./SignInModal";
import SignOutModal from "./SignOutModal";
import "./CollapsibleNavbar.scss";
import "./SignInArea.scss";



export default function SignInArea() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const [buttonText, setButtonText] = useState("Sign In");
  const [buttonClass, setButtonClass] = useState("sign-in-btn");
  const [showModal, setShowModal] = useState(null);



  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [isSignedIn]);

  return (
    <>
      <li className="nav-item">
        <button
          className={buttonClass}
          onClick={isSignedIn ? handleSignOut : handleSignIn}
        >
          {buttonText}
        </button>
      </li>
      {showModal === "signIn" && <SignInModal className="modal-width" onSignIn={handleSubmitCloseSignIn} closeButton={handleCloseSignIn} />}
      {showModal === "signOut" && <SignOutModal onSignOut={handleSubmitCloseSignOut} closeButton={handleCloseSignOut} />}
    </>
  );

  function componentDidMount() {
    setDidMount(true);
    console.log("SignInArea Mounted");
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("SignInArea Updated");

      if (isSignedIn) {
        setButtonText("Sign Out");
        setButtonClass("sign-out-btn");
      } else {
        setButtonText("Sign In");
        setButtonClass("sign-in-btn");
      }
    }
  }

  // There were a number of issues that were created when I decided to add the sign in and out buttons to the navbar. I tried controlling visibility conditionally of the modals but ended up having to conditionally render them and create a backdrop element to handle the fade effect. It was more trouble than it was worth for the just aesthetic benefit of integrating the modal buttons into the navbar.
  function handleSignIn() {
    console.log("User is signing in...");
    setShowModal("signIn");
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);
  }

  function handleCloseSignIn() {
    console.log("Closing Sign-In Modal...");
    setShowModal(null);
    const backdrop = document.querySelector(".modal-backdrop");
    backdrop.classList.remove("show");
    setTimeout(() => backdrop.remove(), 300);
  }
  function handleSubmitCloseSignIn() {
    console.log("Closing Sign-In Modal...");
    setIsSignedIn(true);
    setShowModal(null);
    const backdrop = document.querySelector(".modal-backdrop");
    backdrop.classList.remove("show");
    setTimeout(() => backdrop.remove(), 300);
  }
  function handleSignOut() {
    console.log("User is signing out...");
    setShowModal("signOut");
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);
  }

  function handleCloseSignOut() {
    console.log("Closing Sign-Out Modal...");
    setShowModal(null);
    const backdrop = document.querySelector(".modal-backdrop");
    backdrop.classList.remove("show");
    setTimeout(() => backdrop.remove(), 300);
  }
  function handleSubmitCloseSignOut() {
    console.log("Closing Sign-Out Modal...");
    setIsSignedIn(false);
    setShowModal(null);
    const backdrop = document.querySelector(".modal-backdrop");
    backdrop.classList.remove("show");
    setTimeout(() => backdrop.remove(), 300);
  }
}