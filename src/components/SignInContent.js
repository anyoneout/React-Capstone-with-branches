import React from "react";
import "./SignInContent.scss";

export default function SignInContent() {
  return (
    <>
      <div>
        <input className="input-style" style={{ backgroundColor: "black", border: "1px solid yellow", color: "white" }}
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input style={{ backgroundColor: "black", border: "1px solid blue", color: "white" }}
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
    </>
  )
}