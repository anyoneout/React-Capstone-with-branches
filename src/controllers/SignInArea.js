import React, { useEffect, useState } from "react";
import SignInModal from "../components/SignInModal";
import SignOutModal from "../components/SignOutModal";

export default function SignInArea() {
  const [button, setButton] = useState(<></>);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [isSignedIn]);

  return <>{button}</>

  function componentDidMount() {
    setDidMount(true);
    console.log("mount phase");

    if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
    else setButton(<SignInModal onSignIn={handleSignIn} />);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("Update phase for SignInArea");

      if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
      else setButton(<SignInModal onSignIn={handleSignIn} />);
    }
  }

  function handleSignIn() {
    setIsSignedIn(true);
    console.log("User is signed in");
  }

  function handleSignOut() {
    setIsSignedIn(false);
    console.log("User is signed out")
  }
}



