import { baseURL } from "../utilities/baseUrl.js";
const productsContainer = document.querySelector("#products-container");

export function displayProducts(product) {
  for (let i = 0; i < product.length; i++) {
    // const productImg = baseURL + product[i].image.url;
    const productTitel = product[i].title;
    // const productImgAlt = product[i].image.alternativeText;
    const productPrice = product[i].price;
    const productId = product[i].id;

    productsContainer.innerHTML += `
          <div class="feature-products-carousel--item">
          <a href="product-details.html?id=${productId}" id="${productId}">
          <img src="#" alt="#">
          </a>
          <div>
          <h5>${productTitel}</h5>
          <p>$${productPrice}</p>
          </div>
          </div>
          `;
  }
}