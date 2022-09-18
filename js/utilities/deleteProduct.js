import { baseURL } from "../utilities/baseUrl.js";
import { displayMsg } from "../component/displayMsg.js";

export default function deleteProduct(id) {
  const container = document.querySelector("#delete_product_btn--container");

  container.innerHTML = `
  <button type="button" id="deleteProduct-btn" class="btn btn-primary" type="button">
    Delete
  </button>
  `;

  const button = document.querySelector("#deleteProduct-btn");

  button.onclick = async function () {
    const doDelete = confirm("Are you sure you want to delete this product?");

    if (doDelete) {
      const url = baseURL + `/produscts/${id}`;
      const token = localStorage.getItem("token");
      const apiToken = JSON.parse(token);

      const option = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      };

      try {
        const response = await fetch(url, option);
        const json = await response.json();

        displayMsg(
          "success",
          "The product have been deleted!",
          ".edit_product-msg--container"
        );

        // location.href = "index.html";
      } catch (error) {
        console.log(error);
        displayMsg(
          "error",
          "Sorry, couldn't delete the product. <br> Something unexpected happened, please try again later",
          ".edit_product-msg--container"
        );
      }
    }
  };
}
