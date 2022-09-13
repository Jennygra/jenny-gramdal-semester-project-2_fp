import createNav from "./component/createNav.js";
import createNewsletter from "./component/newsletter.js";
import { baseURL } from "./utilities/baseUrl.js";
import { displayProducts } from "./component/displayProducts.js";
import { displayMsg } from "./component/displayMsg.js";
import { searchProduct } from "./component/search.js";

const productUrl = baseURL + "/products";

createNav();
createNewsletter();

(async function fetchProductDetails() {
  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    displayProducts(json);
    searchProduct(json);
  } catch (error) {
    console.log(error);
    // displayMsg(
    //   "error",
    //   "Something went wrong, please try again later or contact support for help!",
    //   ".container"
    // );
  }
})();
