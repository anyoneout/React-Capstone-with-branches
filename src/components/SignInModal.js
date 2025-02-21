import React from "react";
import SignInContent from "./SignInContent";

export default function SignInModal() {

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
          className="modal fade"
          id="signInModal"
          tabIndex="-1"
          aria-labelledby="signInModalLabel"
          aria-hidden="true">
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
                  data-bs-dismiss="modal"
                  aria-label="Close">
                </button>
              </div>
              <div className="modal-body">
                <SignInContent />
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
  function handleSubmit(event) {
    event.preventDefault();
  }
}

