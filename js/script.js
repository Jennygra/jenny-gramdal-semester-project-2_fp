import { baseURL } from "./utilities/baseUrl.js";
import createNav from "./component/createNav.js";
import { featureProduct } from "./component/featureProduct.js";
import createNewsletter from "./component/newsletter.js";

createNav();
createNewsletter();

// const featureProductContainer = document.querySelector(
//   ".feature-products-container"
// );
// const loaderContainer = document.querySelector(".loader--container");

// setTimeout(() => {
//   loaderContainer.style.display = "none";
//   featureProductContainer.style.display = "";
// }, 1500);

const productUrl = baseURL + "/products";

(async function fetchProduct() {
  try {
    const response = await fetch(productUrl);
    const result = await response.json();

    featureProduct(result);
  } catch (error) {
    featureProductContainer.style.display = "none";
  }
})();
