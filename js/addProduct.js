import createNav from "./component/createNav.js";
import { getUserName } from "./utilities/storage.js";
import { baseURL } from "./utilities/baseUrl.js";

createNav();

const welcomeHeaderContainer = document.querySelector(
  ".welcome_header--container"
);

function displayUserName() {
  const username = getUserName();

  if (username) {
    welcomeHeaderContainer.innerHTML = `
    <div>
    <h1>Hello, ${username}!</h1> 
    </div> 
    `;
  }
}

displayUserName();

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
    console.log("Please fill out the form correctly");
  }

  let isChecked = false;

  if (featureProduct.checked) {
    isChecked = true;
  } else {
    return isChecked;
  }

  addProduct(nameValue, priceValue, descriptionValue, imageUrl, isChecked);
}

async function addProduct(name, price, description, image, feature) {
  const url = baseURL + "/products";
  const data = JSON.stringify({
    title: name,
    price: price,
    description: description,
    image_url: image,
    featured: feature,
  });

  const token = localStorage.getItem("token");
  console.log(token);

  const option = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyODEwMjY5LCJleHAiOjE2NjU0MDIyNjl9.RQV0Kgfw458jaHaAdmdGZcFclR9gsuahVXDCxzkStR4`,
    },
  };

  try {
    const response = await fetch(url, option);
    const json = await response.json();

    if (json.created_at) {
      console.log("the product have been added ");
      addProductForm.reset();
    }

    if (json.error) {
      console.log("You dont have the access to add products");
    }

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
