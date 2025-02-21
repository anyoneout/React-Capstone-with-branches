import React from "react";

export default function SignInContent({ errorMessage }) {

  return (
    <>
      Email:
      <input
        type="email"
        required
      />
      <br />
      Password:
      <input
        type="password"
        required
      />
      <div>{errorMessage}</div>
    </>
  )
}