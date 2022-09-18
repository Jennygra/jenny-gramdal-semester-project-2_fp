import { baseURL } from "./utilities/baseUrl.js";
import createNav from "./component/createNav.js";
import { featureProduct } from "./component/featureProduct.js";
import createNewsletter from "./component/newsletter.js";

createNav();
createNewsletter();

const loaderContainer = document.querySelector(".loader-container");
const featureProductContainer = document.querySelector(
  ".feature-products-container"
);
const bannerContainer = document.querySelector(".banner-container");
const featureCollectionContainer = document.querySelector(
  ".feature-collection-container"
);
const newsletterContainer = document.querySelector(".newsletter-container");
const footerBanner = document.querySelector(".footer-banner");

featureProductContainer.style.display = "none";
bannerContainer.style.display = "none";
featureCollectionContainer.style.display = "none";
newsletterContainer.style.display = "none";
footerBanner.style.display = "none";

setTimeout(() => {
  loaderContainer.style.display = "none";
  featureProductContainer.style.display = "";
  bannerContainer.style.display = "";
  featureCollectionContainer.style.display = "";
  newsletterContainer.style.display = "";
  footerBanner.style.display = "";
}, 1800);

const productUrl = baseURL + "/products";

(async function fetchProduct() {
  try {
    const response = await fetch(productUrl);
    const result = await response.json();

    featureProduct(result);
  } catch (error) {
    featureProductContainer.style.display = "none";
    console.log(error);
  }
})();
