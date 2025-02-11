import React from "react";

export default function SignInContent({ errorMessage }) {



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
        type="password"
        name="password"
        required
      />
      <div>{errorMessage}</div>
    </>
  )
}