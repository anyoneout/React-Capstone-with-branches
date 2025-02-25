import React from "react";
import SignInContent from "./SignInContent";
import { handleSignInAttempt } from "../controllers/handleSignInAttempt";
import "./SignInModal.scss";


export default function SignInModal(props) {
  const onSignIn = props.onSignIn;
  const closeButton = props.closeButton;



  return (
    <form onSubmit={handleSubmit}>
      <div
        className="modal fade d-block show d-flex align-items-center"
        id="signInModal"
        tabIndex="-1"
        aria-labelledby="signInModalLabel"
        aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="signInModalLabel">
                Sign In
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeButton}
                aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <SignInContent />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeButton}>
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
  async function handleSubmit(event) {
    event.preventDefault();
    const isAuthenticated = await handleSignInAttempt(event, onSignIn);

    if (isAuthenticated) {
      onSignIn();
    } else {
      console.log("authentication failed")
    }
  }
}


