import { baseURL } from "../utilities/baseUrl.js";

export function displayProducts(product) {
  const productsContainer = document.querySelector("#products-container");
  productsContainer.innerHTML = "";

  for (let i = 0; i < product.length; i++) {
    const productImg = baseURL + product[i].image.url;
    const altImg = product[i].image_url;
    const productTitel = product[i].title;
    const productImgAlt = product[i].image.alternativeText;
    const productPrice = product[i].price;
    const productId = product[i].id;

    let img;

    if (productImg === "http://localhost:1337undefined" || null || undefined) {
      img = altImg;
    } else {
      img = productImg;
    }

    productsContainer.innerHTML += `
          <div class="products--wrapper">
          <a href="product-details.html?id=${productId}" id="${productId}">
          <img src="${img}" alt="${productImgAlt} id="product-img">
          </a>
          <div>
          <h5>${productTitel}</h5>
          <p>$${productPrice}</p>
          </div>
          </div>
          `;
  }
}
