import { displayProducts } from "./displayProducts.js";
import { displayMsg } from "./displayMsg.js";

export function searchProduct(products) {
  const searchInput = document.querySelector(".search-input");

  searchInput.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredProduct = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
    );

    if (filteredProduct.length === 0) {
      console.log("no result");
      displayMsg(
        "error",
        "No result, please try another word",
        ".products-msg--container"
      );
    }

    displayProducts(filteredProduct);
  };
}
