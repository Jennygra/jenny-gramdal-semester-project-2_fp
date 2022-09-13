import { isExistingProduct } from "../utilities/isExistingProduct.js";
const totalPriceContainer = document.querySelector(".total_price--container");

const productList = isExistingProduct();
let sum = 0;

export function totalPrice() {
  productList.forEach((product) => {
    const price = product.price;
    const convertedPrice = parseFloat(price);

    sum += convertedPrice;

    displayTotalPrice(sum);
  });
}

function displayTotalPrice(total) {
  totalPriceContainer.innerHTML = `
    <div>
    <p>Total price:</p> 
    <p>$${total}</p>
    </div> 
    `;
}
