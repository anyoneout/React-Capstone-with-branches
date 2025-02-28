import { authenticationAws } from "../modules/authenticationAws";



//handles user attempted sign-in
export async function handleSignInAttempt(event, onSignIn) {

  //prevents refresh
  event.preventDefault();

  //extracts elements from form and assigns them to variables
  const form = event.target;
  const emailInput = form.querySelector("[name='email']");
  const passwordInput = form.querySelector("[name='password']");
  const closeButton = form.querySelector("[data-bs-dismiss='modal']");

  //assigns extracted email and password to variables
  const email = emailInput.value;
  const password = passwordInput.value;

  //fetch request to authenticate user sign in with DynamoDB
  const isAuthenticated = await authenticationAws(email, password);

  //if user is authenticated, clear fields and call OnSignIn otherwise return false 
  if (isAuthenticated) {
    console.log("is authenticated");
    form.reset();
    onSignIn();
    return true;
  } else {
    console.log("User authentication failed");
    return false;
  }
}
