import React from "react";


export default function SignOutModal(props) {
  const onSignOut = props.onSignOut;
  const closeButton = props.closeButton;
  return (
    <form
      onSubmit={handleSubmit}
      className="modal fade show d-block"
      id="signOutModal"
      tabIndex="-1"
      aria-labelledby="signOutModalLabel"
      aria-hidden="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1>Sign Out</h1>
            <button
              type="button"
              className="btn-close"
              onClick={closeButton}
              aria-label="Close">
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to sign out?
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
              className="btn btn-warning"
              data-bs-dismiss="modal">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </form >
  )
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Module has signed out");
    onSignOut();
  }
}


