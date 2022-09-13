import createNav from "./createNav.js";
import { baseURL } from "../utilities/baseUrl.js";
import { saveToken, saveUser } from "../utilities/storage.js";

createNav();

const form = document.querySelector("#loginForm");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginFormContainer = document.querySelector(".login_form--container");
const logOutContainer = document.querySelector(".log_out--container");

if (localStorage.getItem("token") !== null) {
  loginFormContainer.style.display = "none";
  logOutContainer.style.display = "block";
} else {
  loginFormContainer.style.display = "block";
  logOutContainer.style.display = "none";
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue === 0) {
    console.log("invalid, please try again");
  }

  doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
  const url = baseURL + "/auth/local";
  const data = JSON.stringify({
    identifier: username,
    password: password,
  });

  const option = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, option);
    const json = await response.json();

    console.log(json);

    if (json.user) {
      console.log("yeay! loged in");

      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "index.html";
    }

    if (json.error) {
      console.log("failed to logg in");
    }
  } catch (error) {
    console.log(error);
  }
}
