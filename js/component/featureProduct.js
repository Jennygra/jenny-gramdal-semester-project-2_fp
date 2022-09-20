import { baseURL } from "../utilities/baseUrl.js";

export function featureProduct(product) {
  const carouselContainer = document.querySelector(
    ".feature-products-item--product"
  );

  const featuredProducts = product.filter(
    (products) => products.featured === true
  );

  for (let i = 0; i < featuredProducts.length; i++) {
    const productImg = baseURL + product[i].image.url;
    const productAltImg = product[i].image_url;
    const productTitel = product[i].title;
    const productImgAlt = product[i].image.alternativeText;
    const productPrice = product[i].price;
    const productId = product[i].id;

    let img;

    if (productImg === "http://localhost:1337undefined" || null || undefined) {
      img = productAltImg;
    } else {
      img = productImg;
    }

    if (
      productAltImg === "" &&
      productImg === "http://localhost:1337undefined"
    ) {
      img = "./img/no-image.jpg";
    }

    carouselContainer.innerHTML += `
      <div class="feature-products-carousel--item">
      <a href="product-details.html?id=${productId}" id="${productId}">
      <img src="${img}" alt="${productImgAlt}">
      </a>
      <div>
      <h5>${productTitel}</h5>
      <p>$${productPrice}</p>
      </div>
      </div>
      `;
  }
}
