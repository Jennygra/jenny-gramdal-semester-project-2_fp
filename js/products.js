import createNav from "./component/createNav.js";

// import { baseURL } from "./settings/api.js";
// import { displayProducts } from "./utilities/displayProducts.js";
// // // import { searchItem } from "./component/search.js";
// const productsContainer = document.querySelector("#products-container");
// const search = document.querySelector(".search-input");
// const productUrl = baseURL + "products";

createNav();
console.log(createNav);

// (async function fetchProductDetails() {
//   try {
//     const response = await fetch(productUrl);
//     const json = await response.json();

//     renderProducts(json);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// let productToRender;

// function renderProducts(product) {
//   product.forEach((item) => {
//     productsContainer.innerHTML += `
//       <div class="feature-products-carousel--item">
//       <a href="edit-product.html?id=${item.id}" id="${item.id}">
//       <img src="${item.image.url}" alt="${item.image.alternativeText}">
//       </a>
//       <div>
//       <h5>${item.title}</h5>
//       <p>$${item.price}</p>
//       </div>
//       </div>
//       `;
//   });

//   productToRender = product;
// }

// search.addEventListener("input", (e) => {
//   const value = e.target.value.trim().toLowerCase();
//   const filteredProducts = productToRender.filter((product) => {
//     if (product.title.toLowerCase().startsWith(value)) {
//       return true;
//     }
//   });

//   console.log(value);
//   console.log(filteredProducts);
// });
