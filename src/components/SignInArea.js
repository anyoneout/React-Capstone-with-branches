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


  function handleSignIn() {
    console.log("User is signing in...");
    setShowModal("signIn");
  }

  function handleCloseSignIn() {
    console.log("Closing Sign-In Modal...");
    setShowModal(null);
  }
  function handleSubmitCloseSignIn() {
    console.log("Closing Sign-In Modal...");
    setIsSignedIn(true);
    setShowModal(null);
  }
  function handleSignOut() {
    console.log("User is signing out...");
    setShowModal("signOut");
  }

  function handleCloseSignOut() {
    console.log("Closing Sign-Out Modal...");
    setShowModal(null);
  }
  function handleSubmitCloseSignOut() {
    console.log("Closing Sign-Out Modal...");
    setIsSignedIn(false);
    setShowModal(null);
  }
}