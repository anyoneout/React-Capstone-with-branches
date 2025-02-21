import { authenticationAws } from "../modules/authenticationAws";




export async function handleSignInAttempt(event, onSignIn) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.querySelector("[name='email']");
  const passwordInput = form.querySelector("[name='password']");
  const closeButton = form.querySelector("[data-bs-dismiss='modal']");

  const email = emailInput.value;
  const password = passwordInput.value;

  const isAuthenticated = await authenticationAws(email, password);

  if (isAuthenticated) {
    console.log("is authenticated");
    closeButton.click();
    form.reset();
    onSignIn();
  }
}