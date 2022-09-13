import { baseURL } from "../utilities/baseUrl.js";

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

    console.log(doDelete);

    if (doDelete) {
      const url = baseURL + `/products/${id}`;
      // const token = localStorage.getItem("token");
      const option = {
        method: "DELETE",
        headers: {
          //   Authorization: `Bearer ${token}`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYyODEwMjY5LCJleHAiOjE2NjU0MDIyNjl9.RQV0Kgfw458jaHaAdmdGZcFclR9gsuahVXDCxzkStR4`,
        },
      };

      try {
        const response = await fetch(url, option);
        const json = await response.json();

        location.href = "index.html";
      } catch (error) {
        console.log(error);
      }
    }
  };
}
