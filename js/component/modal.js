export function modal() {
  const prodImg = document.querySelector(".product_detail--img img");
  prodImg.classList.add("myImg");

  const modal = document.querySelector("#mymodal");
  const img = document.querySelector(".myImg");
  const modalImg = document.querySelector("#img01");
  const captionText = document.querySelector("#caption");

  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    if (captionText.innerHTML === "undefined") {
      captionText.style.display = "none";
    }
  };

  modal.onclick = function (event) {
    let isClick = modalImg.contains(event.target);

    if (!isClick) {
      modal.style.display = "none";
    }
  };
}
