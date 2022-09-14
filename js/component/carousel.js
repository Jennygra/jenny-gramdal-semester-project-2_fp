const nextBtn = document.querySelector("#carousel-next");
const prevBtn = document.querySelector("#carousel-prev");
const carouselConatiner = document.querySelector(
  ".feature-products-item--product "
);

nextBtn.addEventListener("click", function () {
  carouselConatiner.scrollLeft += 350;
});

prevBtn.addEventListener("click", function () {
  carouselConatiner.scrollLeft -= 350;
});
