import createNav from "./component/createNav.js";
import { baseURL } from "./utilities/baseUrl.js";
import deleteProduct from "./utilities/deleteProduct.js";
import { noAccessMsg } from "./component/displayMsg.js";

createNav();
noAccessMsg(".edit_product--container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productIdUrl = baseURL + "/products?id=" + id;

const editProductForm = document.querySelector(".edit-product-form");
const idInput = document.querySelector(".edit_id--input");
const nameInput = document.querySelector(".edit_name--input");
const priceInput = document.querySelector(".edit_price--input");
const imageInput = document.querySelector(".edit_img--input");
const descriptionInput = document.querySelector(".edit_decription--input");
const featureCheckbox = document.querySelector(".edit_feature--checkbox");

(async function () {
  try {
    const response = await fetch(productIdUrl);
    const json = await response.json();

    idInput.value = json[0].id;
    nameInput.value = json[0].title;
    priceInput.value = json[0].price;
    imageInput.value = json[0].image.url || json[0].image_url;
    descriptionInput.value = json[0].description;

    let isChecked;

    if (json[0].featured === true) {
      isChecked = true;
    } else {
      return isChecked;
    }

    featureCheckbox.checked = isChecked;

    deleteProduct(json[0].id);
  } catch (error) {
    console.log(error);
  }
})();

editProductForm.addEventListener("submit", submitForm);

function submitForm() {
  event.preventDefault();

  const idValue = idInput.value;
  const nameValue = nameInput.value.trim();
  const priceValue = parseFloat(priceInput.value);
  const descriptionValue = descriptionInput.value.trim();
  const imageUrl = imageInput.value.trim();

  if (
    nameValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    imageUrl.length === 0 ||
    descriptionValue.length === 0
  ) {
    console.log("Please fill out the form correctly");
  }

  let isChecked;

  if (featureCheckbox.checked) {
    isChecked = true;
  } else {
    isChecked = false;
  }

  updateProduct(
    idValue,
    nameValue,
    priceValue,
    descriptionValue,
    imageUrl,
    isChecked
  );
}

async function updateProduct(id, name, price, description, image, feature) {
  const url = baseURL + `/products/${id}`;
  const data = JSON.stringify({
    title: name,
    price: price,
    description: description,
    image_url: image,
    featured: feature,
  });

  const token = localStorage.getItem("token");
  const apiToken = JSON.parse(token);

  const option = {
    method: "PUT",
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
      console.log("the product have been updated ");
      editProductForm.reset();
    }

    if (json.error) {
      console.log("You dont have the access to edit the product");
    }
  } catch (error) {
    console.log(error);
  }
}
