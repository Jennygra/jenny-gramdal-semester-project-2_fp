import { isExistingProduct } from "./isExistingProduct.js";
import { saveProduct } from "./saveProduct.js";

export function removeFromCart() {
  const buttonId = this.id;
  const exisitingProduct = isExistingProduct();
  const newProduct = exisitingProduct.filter(
    (product) => product.id !== buttonId
  );

  saveProduct(newProduct);
  location.reload();
}
