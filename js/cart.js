import createNav from "./component/createNav.js";
import { isExistingProduct } from "./utilities/isExistingProduct.js";
import { displayMsg } from "./component/displayMsg.js";
import { removeFromCart } from "./utilities/removeFromCart.js";
import { totalPrice } from "./component/totalPrice.js";

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
    cartListContainer.innerHTML += `
        <div class="feature-products-carousel--item">
        <a href="product-details.html?id=${product.id}" id="${product.id}">
        <img src="${product.img}" alt="">
        </a>
        <div>
        <h5>${product.title}</h5>
        <p>$${product.price}</p>
        <button class="remove_from_cart--btn" id="${product.id}">Remove</button>
        </div>
        </div>
        `;
  });

  const removeBtn = document.querySelectorAll(".remove_from_cart--btn");
  removeBtn.forEach((button) =>
    button.addEventListener("click", removeFromCart)
  );
}
