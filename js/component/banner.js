import { baseURL } from "../utilities/baseUrl.js";

const bannerImgContainer = document.querySelector(".banner-item--img");
const bannerURL = baseURL + "/home";

(async function getBannerImg() {
  try {
    const response = await fetch(bannerURL);
    const json = await response.json();

    renderBannerImg(json);
  } catch (error) {
    bannerImgContainer.style.display = "none";
  }
})();

function renderBannerImg(banner) {
  const img = baseURL + banner.hero_banner.url;
  const alt = banner.hero_banner_alt_text;

  bannerImgContainer.innerHTML = `
          <a href="products.html"><img src="${img}" alt="${alt}"></a>
          `;
}
