import React from "react";

export function Card(props) {
  return (
    <div
      className="card"
      style={{ width: "90%", height: "auto", backgroundColor: "black" }}
    >
      <img
        src={props.src}
        className="card-img img-fluid home-image"
        alt="..."
      />
    </div>
  )
}