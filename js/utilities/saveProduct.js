export function saveProduct(product) {
  localStorage.setItem("Product", JSON.stringify(product));
}
