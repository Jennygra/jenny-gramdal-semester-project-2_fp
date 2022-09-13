export function isExistingProduct() {
  const product = localStorage.getItem("Product");

  if (!product) {
    return [];
  } else {
    return JSON.parse(product);
  }
}
