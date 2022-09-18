import createNav from "./component/createNav.js";
import { isExistingProduct } from "./utilities/isExistingProduct.js";
import { displayMsg } from "./component/displayMsg.js";
import { removeFromCart } from "./utilities/removeFromCart.js";
import { totalPrice } from "./component/totalPrice.js";

const loaderContainer = document.querySelector(".loader-container");
const cartContainer = document.querySelector(".cart--container");

cartContainer.style.display = "none";

setTimeout(() => {
  loaderContainer.style.display = "none";
  cartContainer.style.display = "";
}, 500);

createNav();
totalPrice();

const listKey = "product";
const cartList = isExistingProduct();

export const cartListContainer = document.querySelector(
  ".cart_list--container"
);

if (localStorage.length === 0 || localStorage.getItem(listKey) === "[]") {
  console.log("empty cart");
  displayMsg("error", "The cart is empty", ".cart_list--container");
} else {
  cartList.forEach((product) => {
    let prodImg;

    if (product.img === "http://localhost:1337undefined") {
      prodImg = product.image_url;
    } else {
      prodImg = product.img;
    }

    cartListContainer.innerHTML += `
        <div class="cart_list--wrapper ">
        <a href="product-details.html?id=${product.id}" id="${product.id}">
        <img src="${prodImg}" alt="">
        </a>
        <div>
        <h5>${product.title}</h5>
        <p>$${product.price}</p>
        <button class="remove_from_cart--btn cta-btn" id="${product.id}">Remove</button>
        </div>
        </div>
        `;
  });

  const removeBtn = document.querySelectorAll(".remove_from_cart--btn");
  removeBtn.forEach((button) =>
    button.addEventListener("click", removeFromCart)
  );
}
