import { validateEmail } from "../utilities/validation.js";

export default function createNewsletter() {
  const newsletterContainer = document.querySelector(".newsletter-container");

  newsletterContainer.innerHTML += `
  <h4>Register on our newsletter!</h4>
          <p>Keep up to date with promotions, new products and sales.</p>
          <form id="newsletter-form" method="POST">
            <div class="input-group newsltter-input-wrapper">
              <input
                type="email"
                class="form-control"
                id="newsletter-input"
                placeholder="Enter your email"
                required
              />
              <span class="input-group-btn">
                <button class="btn" id="newsletter-btn" type="submit">
                  Subscribe
                </button>
              </span>
          </form>
          </div>
          <div class="newsletter-msg error-msg">error</div>
          <div class="newsletter-msg success-msg">success</div>
          `;

  const newsletterInput = document.querySelector("#newsletter-input");
  const newsletterError = document.querySelector(".error-msg");
  const newsletterBtn = document.querySelector("#newsletter-btn");

  function validateNewsletter() {
    event.preventDefault();

    let isNewsletterValidated = true;

    if (validateEmail(newsletterInput.value) === true) {
      newsletterError.style.display = "none";
    } else {
      newsletterError.style.display = "block";
      isNewsletterValidated = false;
    }

    return isNewsletterValidated;
  }

  function submitNewsletter() {
    if (!validateNewsletter) {
      return false;
    } else {
      console.log("submitted");
    }
  }

  newsletterBtn.addEventListener("click", submitNewsletter);
}
