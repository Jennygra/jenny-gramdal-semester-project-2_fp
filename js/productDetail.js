// import { addToCart } from "./storage/addToCart.js";
import createNav from "./component/createNav.js";
import { baseURL } from "./utilities/baseUrl.js";
import { displayProductDetails } from "./component/displayProdDetails.js";

createNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productIdUrl = baseURL + "/products?id=" + id;

(async function getProductById() {
  try {
    const response = await fetch(productIdUrl);
    const result = await response.json();

    displayProductDetails(result);
  } catch (error) {
    console.log(error);
  }
})();
