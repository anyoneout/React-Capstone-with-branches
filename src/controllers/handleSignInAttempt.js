import { authenticationAws } from "../modules/authenticationAws";



export async function handleSignInAttempt(event, setErrorMessage) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form[1];
  const passwordInput = form[2];
  const closeButton = form[3];

  const email = emailInput.value;
  const password = passwordInput.value;
  const resolveValue = await authenticationAws(email, password);
  const isAuthenticated = resolveValue;
  if (isAuthenticated) {
    console.log("is authenticated");
    closeButton.click;
    form.reset();

  } else setErrorMessage("error");
}