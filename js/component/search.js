import { displayProducts } from "./displayProducts.js";

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
    }

    displayProducts(filteredProduct);
  };
}
