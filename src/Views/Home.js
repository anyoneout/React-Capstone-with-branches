import React, { useEffect, useState } from "react";
import { HomeGenerator } from "../components/HomeGenerator";


export function Home() {

  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return <HomeGenerator />

  function componentDidMount() {
    setDidMount(true);
    console.log("The component has mounted");
    document.title = "Recipe Deconstructor - Home";
    return componentDidUnmount;
  }

  function componentDidUpdate() {
    if (didMount) console.log("The component has updated");
  }

  function componentDidUnmount() {
    function delayedUnmount() {
      console.log("The component has unmounted");
    }
    return delayedUnmount;
  }
}