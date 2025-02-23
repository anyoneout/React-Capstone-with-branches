import React from "react";

export default function SignInContent() {

  return (
    <>
      Email:
      <input
        type="email"
        name="email"

      />
      <br />
      Password:
      <input
        name="password"
        type="password"

      />
      <div></div>
    </>
  )
}