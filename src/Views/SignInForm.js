/* import React, { useState } from "react";
import SignInContent from "./SignInContent";
import { handleSignInAttempt } from "../controllers/handleSignInAttempt";


export default function SignInForm() {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#signInModal">
        Sign In
      </button>

      <form onSubmit={handleSubmit}>
        <div
          className="modal"
          id="signInModal"
          tabIndex="-1"
          aria-labelledby="SignInModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title"
                  id="signInModalLabel">
                  Modal Title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="close"
                ></button>
              </div>
              <div className="modal-body">
                <SignInContent errorMessage={errorMessage} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-warning"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
  function handleSubmit(event) {
    console.log("handleSignIn started");
    handleSignInAttempt(event, setErrorMessage);
  }
}
 */