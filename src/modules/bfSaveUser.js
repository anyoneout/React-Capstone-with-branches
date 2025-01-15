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
function updateUI() {
  const userNameHandle = document.getElementById("userNameHTML");
  const userEmailHandle = document.getElementById("userEmailHTML");

  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");

  userNameHandle.innerHTML = userName;
  userEmailHandle.innerHTML = userEmail;
}

export function bfSaveUser() {
  const { name, email, hfToken } = getInputValues();
  saveToLocalStorage(name, email, hfToken);
  updateUI();
}
