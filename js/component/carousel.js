const nextBtn = document.querySelector("#carousel-next");
const prevBtn = document.querySelector("#carousel-prev");
const featureProductsItemCarousel = document.querySelector(
  ".feature-products-item--carousel"
);

nextBtn.addEventListener("click", function () {
  featureProductsItemCarousel.scrollLeft += 350;
});

prevBtn.addEventListener("click", function () {
  featureProductsItemCarousel.scrollLeft -= 350;
});
