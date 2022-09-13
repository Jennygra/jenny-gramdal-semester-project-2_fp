import { displayProducts } from "./displayProducts.js";

export function searchProduct(products) {
  const searchInput = document.querySelector(".search-input");

  console.log(products);
  console.log(searchInput);

  searchInput.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredProduct = products.filter((product) =>
      product.title.toLowerCase().startWith(searchValue)
    );

    console.log(filteredProduct);
  };
}
