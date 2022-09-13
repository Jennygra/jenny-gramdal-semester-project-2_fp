import { baseURL } from "./utilities/baseUrl.js";
import createNav from "./component/createNav.js";
import { featureProduct } from "./component/featureProduct.js";
import { displayMsg } from "./component/displayMsg.js";
import createNewsletter from "./component/newsletter.js";

createNav();
createNewsletter();

const productUrl = baseURL + "/products";

(async function fetchProduct() {
  try {
    const response = await fetch(productUrl);
    const result = await response.json();

    featureProduct(result);
  } catch (error) {
    console.log(error);
    displayMsg(
      "error",
      "Ops! Something wrong happened, please come back later",
      ".feature-products-container"
    );
  }
})();
