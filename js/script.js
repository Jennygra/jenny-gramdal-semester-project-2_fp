import { baseURL } from "./utilities/baseUrl.js";
import createNav from "./component/createNav.js";
import { featureProduct } from "./component/featureProduct.js";
import createNewsletter from "./component/newsletter.js";

const featureProductContainer = document.querySelector(
  ".feature-products-container"
);

createNav();
createNewsletter();

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
