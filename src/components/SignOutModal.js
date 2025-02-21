import React from "react";


export default function SignOutModal() {

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#signOutModal">
        Sign Out
      </button>


      <form
        onSubmit={handleSubmit}
        className="modal fade"
        id="signOutModal"
        tabIndex="-1"
        aria-labelledby="signOutModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Sign Out</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
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
                data-bs-dismiss="modal">
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
    </>
  )
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Module has signed out")
  }
}


