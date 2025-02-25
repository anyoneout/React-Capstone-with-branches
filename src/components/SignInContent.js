import React from "react";
import "./SignInContent.scss";

export default function SignInContent() {
  return (
    <>
      <div className="input-container">
        <input className="input-style"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input className="input-style"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
    </>
  )
}