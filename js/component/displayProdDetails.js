import { baseURL } from "../utilities/baseUrl.js";
import { addToCart } from "../utilities/addToCart.js";
import { getUserName } from "../utilities/storage.js";

const productDetailContainer = document.querySelector(
  ".product-detail-container"
);

export function displayProductDetails(product) {
  const img = baseURL + product[0].image.url;
  const titel = product[0].title;
  const imgAlt = product[0].image.alternativeText;
  const price = product[0].price;
  const description = product[0].description;
  const id = product[0].id;
  const userName = getUserName();

  let editBtn = "";

  if (userName) {
    editBtn = `
    <button
    id="editProduct-btn"
    class="btn"
    type="button" onclick="location.href='edit-product.html?id=${id}';">
    Edit this product
    </button>
  `;
  }

  productDetailContainer.innerHTML += `
    <div class="product_detail--wrapper">
    <div class="product_detail--img">
    <img src="${img}" alt="${imgAlt}">
    </div>
  
    <div class="product_detail--details">
    <div>
    <h1>${titel}</h1>
    <p class="product_detail--fee">Fee included. Shipping is calculated at checkout.</p>
    <p class="product_detail--price">Nok ${price}</p>
    </div>
  
    <div>
    <p>${description}</p>
    </div>
  
    <div>
    <button class="cta-btn" id="cartBtn" data-id="${id}" data-title="${titel}" data-price="${price}" data-img="${img}"> Add to cart </button>
    ${editBtn}
    </div>
    </div>
  
    </div>
    `;

  const cartBtn = document.querySelector("#cartBtn");
  cartBtn.addEventListener("click", addToCart);
}
