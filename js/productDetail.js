import createNav from "./component/createNav.js";
import { baseURL } from "./utilities/baseUrl.js";
import { displayProductDetails } from "./component/displayProdDetails.js";
import { featureProduct } from "./component/featureProduct.js";

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
