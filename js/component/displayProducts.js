import { baseURL } from "../utilities/baseUrl.js";

export function displayProducts(product) {
  const productsContainer = document.querySelector("#products-container");
  productsContainer.innerHTML = "";

  for (let i = 0; i < product.length; i++) {
    let productImg = baseURL + product[i].image.url;
    const productTitel = product[i].title;
    const productImgAlt = product[i].image.alternativeText;
    const productPrice = product[i].price;
    const productId = product[i].id;

    productsContainer.innerHTML += `
          <div class="products--wrapper">
          <a href="product-details.html?id=${productId}" id="${productId}">
          <img src="${productImg}" alt="${productImgAlt} id="product-img">
          </a>
          <div>
          <h5>${productTitel}</h5>
          <p>$${productPrice}</p>
          </div>
          </div>
          `;
  }
}
