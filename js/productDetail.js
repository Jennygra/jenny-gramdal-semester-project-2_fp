import createNav from "./component/createNav.js";
import { baseURL } from "./utilities/baseUrl.js";
import { displayProductDetails } from "./component/displayProdDetails.js";
import { featureProduct } from "./component/featureProduct.js";

const loaderContainer = document.querySelector(".loader-container");
const productDetailWrapper = document.querySelector(".product-detail--wrapper");
const featureProductContainer = document.querySelector(
  ".feature-products-container"
);
const bannerContainer = document.querySelector(".banner-container");

featureProductContainer.style.display = "none";
bannerContainer.style.display = "none";
productDetailWrapper.style.display = "none";

setTimeout(() => {
  loaderContainer.style.display = "none";
  productDetailWrapper.style.display = "";
  featureProductContainer.style.display = "";
  bannerContainer.style.display = "";
}, 1000);

createNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productIdUrl = baseURL + "/products?id=" + id;
const featureProdUrl = baseURL + "/products";

(async function getProductById() {
  try {
    const response = await fetch(productIdUrl);
    const result = await response.json();

    displayProductDetails(result);
  } catch (error) {
    console.log(error);
  }
})();

(async function getFeatureProd() {
  try {
    const response = await fetch(featureProdUrl);
    const result = await response.json();

    featureProduct(result);
  } catch (error) {
    console.log(error);
  }
})();
