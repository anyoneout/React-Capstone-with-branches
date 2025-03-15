import React, { useEffect, useState } from "react";

export function bfSaveUser() {
  const { name, email, hfToken } = getInputValues();
  saveToLocalStorage(name, email, hfToken);
}

function getInputValues() {
  const inputName = document.getElementById("nameInput");
  const inputEmail = document.getElementById("emailInput");
  const hfUserToken = document.getElementById("hfTokenInput");

  return {
    name: inputName.value,
    email: inputEmail.value,
    hfToken: hfUserToken.value
  };
}

function saveToLocalStorage(name, email, hfToken) {
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("hfToken", hfToken);
}

export function UserInfo() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    setUserName(userName);
    setUserEmail(userEmail);
  }, []);

  return (
    <>
      <div
        className="row text-end justify-content-end align-items-end"
        style={{
          fontSize: "11px",
          minHeight: "20px",
          color: "#fff78a"
        }}>
        <div
          id="userNameHTML">{userName}
        </div>
      </div>
      <div
        className="row mb-5 text-end"
        style={{
          fontSize: "11px",
          minHeight: "20px",
          color: "#fff78a"
        }}>
        <div
          id="userEmailHTML">{userEmail}
        </div>
      </div >
    </>
  );
}
/* function updateUI() {
  const userNameHandle = document.getElementById("userNameHTML");
  const userEmailHandle = document.getElementById("userEmailHTML");
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  userNameHandle.innerHTML = userName;
  userEmailHandle.innerHTML = userEmail;
}

 */