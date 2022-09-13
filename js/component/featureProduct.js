import { baseURL } from "../utilities/baseUrl.js";
const carouselContainer = document.querySelector(
  ".feature-products-item--product"
);

export function featureProduct(product) {
  const featuredProducts = product.filter(
    (products) => products.featured === true
  );

  for (let i = 0; i < featuredProducts.length; i++) {
    const productImg = baseURL + product[i].image.url;
    const productTitel = product[i].title;
    const productImgAlt = product[i].image.alternativeText;
    const productPrice = product[i].price;
    const productId = product[i].id;

    carouselContainer.innerHTML += `
      <div class="feature-products-carousel--item">
      <a href="product-details.html?id=${productId}" id="${productId}">
      <img src="${productImg}" alt="${productImgAlt}">
      </a>
      <div>
      <h5>${productTitel}</h5>
      <p>$${productPrice}</p>
      </div>
      </div>
      `;
  }
}
