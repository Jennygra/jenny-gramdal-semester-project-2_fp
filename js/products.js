import createNav from "./component/createNav.js";
import { baseURL } from "./utilities/baseUrl.js";
import { displayProducts } from "./component/displayProducts.js";
import { displayMsg } from "./component/displayMsg.js";

const productUrl = baseURL + "/products";

createNav();

(async function fetchProductDetails() {
  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    displayProducts(json);
  } catch (error) {
    console.log(error);
    // displayMsg(
    //   "error",
    //   "Something went wrong, please try again later or contact support for help!",
    //   ".container"
    // );
  }
})();
