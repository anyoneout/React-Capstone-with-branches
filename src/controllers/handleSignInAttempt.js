
export default function handleSignInAttempt(event, setErrorMessage) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form[1];
  const passwordInput = form[2];
  const closeButton = form[3];

  const email = emailInput.value;
  const password = passwordInput.value;
  console.log(email);
  console.log(password);
  setErrorMessage("testing");
}