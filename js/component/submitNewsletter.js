import { validateEmail } from "../utilities/validation.js";

function validateNewsletter() {
  event.preventDefault();

  const newsletterInput = document.querySelector("#newsletter-input");
  const newsletterError = document.querySelector(".error-msg");

  let isValidated = true;

  if (validateEmail(newsletterInput.value) === true) {
    newsletterError.style.display = "none";
  } else {
    newsletterError.style.display = "block";
    isValidated = false;
  }

  return isValidated;
}

export function submitNewsletter() {
  const newsletterSuccess = document.querySelector(".success-msg");

  if (!validateNewsletter()) {
    return false;
  } else {
    newsletterSuccess.style.display = "block";
  }
}
