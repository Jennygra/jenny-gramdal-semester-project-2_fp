import createNav from "./component/createNav.js";
import { baseURL } from "./utilities/baseUrl.js";
import { noAccessMsg } from "./component/displayMsg.js";
import { displayMsg } from "./component/displayMsg.js";

createNav();
noAccessMsg(".add_product--container");

const addProductForm = document.querySelector(".add-product-form");
const productName = document.querySelector(".productName-input");
const productPrice = document.querySelector(".productPrice-input");
const productDescription = document.querySelector(".productDescription-input");
const productImageInput = document.querySelector(".productImg-input");
const featureProduct = document.querySelector(".featureProduct-checkbox");

addProductForm.addEventListener("submit", submitForm);

function submitForm() {
  event.preventDefault();

  const nameValue = productName.value.trim();
  const priceValue = parseFloat(productPrice.value);
  const descriptionValue = productDescription.value.trim();
  const imageUrl = productImageInput.value.trim();

  if (
    nameValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    imageUrl.length === 0 ||
    descriptionValue.length === 0
  ) {
    displayMsg(
      "warn",
      "Please fill out the form correctly",
      ".add_prod_msg--container"
    );
  }

  let isChecked;

  if (featureProduct.checked) {
    isChecked = true;
  } else {
    isChecked = false;
  }

  addProduct(nameValue, priceValue, descriptionValue, imageUrl, isChecked);
}

async function addProduct(name, price, description, image, feature) {
  const url = baseURL + "/products";
  const data = JSON.stringify({
    title: name,
    price: price,
    description: description,
    image: {},
    image_url: image,
    featured: feature,
  });

  const token = localStorage.getItem("token");
  const apiToken = JSON.parse(token);

  const option = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    const response = await fetch(url, option);
    const json = await response.json();

    if (json.created_at) {
      displayMsg(
        "success",
        "The product have been successfully added",
        ".add_prod_msg--container"
      );
      addProductForm.reset();
    }

    if (json.error) {
      displayMsg(
        "warn",
        "Sorry, you don't have the access to add product",
        ".add_prod_msg--container"
      );
    }
  } catch (error) {
    displayMsg(
      "warn",
      "Sorry, Something unexpected happened, please try again later",
      ".add_prod_msg--container"
    );
  }
}
