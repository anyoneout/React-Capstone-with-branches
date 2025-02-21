import React from "react";

export default function SignInContent() {

  return (
    <>
      Email:
      <input
        type="email"
        name="email"
        required
      />
      <br />
      Password:
      <input
        name="password"
        type="password"
        required
      />
      <div></div>
    </>
  )
}