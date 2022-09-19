import createNav from "./component/createNav.js";
import createNewsletter from "./component/newsletter.js";
import { baseURL } from "./utilities/baseUrl.js";
import { displayProducts } from "./component/displayProducts.js";
import { searchProduct } from "./component/search.js";
import { displayMsg } from "./component/displayMsg.js";

const loaderContainer = document.querySelector(".loader-container");
const searchContainer = document.querySelector(".search--container");
const featureCollectionContainer = document.querySelector(
  ".feature-collection-container"
);
const newsletterContainer = document.querySelector(".newsletter-container");

newsletterContainer.style.display = "none";
featureCollectionContainer.style.display = "none";
searchContainer.style.display = "none";

setTimeout(() => {
  loaderContainer.style.display = "none";
  searchContainer.style.display = "";
  featureCollectionContainer.style.display = "";
  newsletterContainer.style.display = "";
}, 1800);

createNav();
createNewsletter();

const productUrl = baseURL + "/products";

(async function fetchProductDetails() {
  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    displayProducts(json);
    searchProduct(json);
  } catch (error) {
    displayMsg(
      "warn",
      "Something unexpected happened, please try again!",
      ".products-msg--container"
    );
  }
})();
