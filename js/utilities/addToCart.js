import { saveProduct } from "./saveProduct.js";
import { isExistingProduct } from "./isExistingProduct.js";

export function addToCart() {
  const id = this.dataset.id;
  const title = this.dataset.title;
  const price = this.dataset.price;
  const img = this.dataset.img;

  const cartBtn = document.querySelector("#cartBtn");
  cartBtn.innerHTML = "Added!";

  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.classList.toggle("fa-bounce");

  const getCurrentProduct = isExistingProduct();
  const existingProduct = getCurrentProduct.find(
    (product) => product.id === id
  );

  if (existingProduct === undefined) {
    const products = { id: id, title: title, price: price, img: img };

    getCurrentProduct.push(products);
    saveProduct(getCurrentProduct);
  } else {
    const newProd = getCurrentProduct.filter((prod) => prod.id !== id);
    saveProduct(newProd);
  }
}
