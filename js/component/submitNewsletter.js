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

  console.log(isValidated);

  return isValidated;
}

export function submitNewsletter() {
  const newsletterSuccess = document.querySelector(".success-msg");

  if (!validateNewsletter()) {
    console.log("fail to submit newsletter");
    return false;
  } else {
    console.log("submitted");
    newsletterSuccess.style.display = "block";
  }
}
