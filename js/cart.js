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

const listKey = "Product";
const cartList = isExistingProduct();

export const cartListContainer = document.querySelector(
  ".cart_list--container"
);

if (localStorage.getItem(listKey) === "[]") {
  displayMsg("warn", "The cart is empty", ".cart_msg--container");
} else {
  cartList.forEach((product) => {
    const imgUrl = product.img;
    const altImg = product.image_url;
    let prodImg;

    console.log(product);
    console.log(localStorage.getItem("Product"));

    if (product.img === "http://localhost:1337undefined") {
      prodImg = altImg;
    } else {
      prodImg = imgUrl;
    }

    if (altImg === "" && imgUrl === "http://localhost:1337undefined") {
      prodImg = "./img/no-image.jpg";
    }

    cartListContainer.innerHTML += `
        <div class="cart_list--wrapper"> 
        <div class="cart_list--details">
        <div class="cart_list--details_img">
        <a href="product-details.html?id=${product.id}" id="${product.id}">
        <img src="${prodImg}" alt="${product.title}">
        </a>
        </div>

        <div class="cart_list--details_details">
        <h5>${product.title}</h5>
        <p>$${product.price}</p>
        </div>
        </div>

        <div>
        <button class="remove_from_cart--btn " id="${product.id}">Remove</button>
        </div>

        </div>
        `;
  });

  const removeBtn = document.querySelectorAll(".remove_from_cart--btn");
  removeBtn.forEach((button) =>
    button.addEventListener("click", removeFromCart)
  );
}
