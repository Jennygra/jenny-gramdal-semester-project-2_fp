import { displayProducts } from "./displayProducts.js";

export function searchProduct(products) {
  const searchInput = document.querySelector(".search-input");

  searchInput.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredProduct = products.filter(
      (product) =>
        product.title.toLowerCase().startsWith(searchValue) ||
        product.description.toLowerCase().startsWith(searchValue)
    );

    if (filteredProduct.length === 0) {
      console.log("no result");
    }

    console.log("Filtered products:", filteredProduct);

    displayProducts(filteredProduct);
  };
}
