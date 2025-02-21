import React from "react";

export default function SignInContent() {

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
    </>
  )
}