import { getUserName } from "../utilities/storage.js";

export default function createNav() {
  const { pathname } = document.location;
  console.log(pathname);

  const navContainer = document.querySelector(".nav-container");

  const userName = getUserName();
  let adminNav = "";

  if (userName) {
    adminNav = `
    <li><a href="add-product.html" class="${
      pathname === "/add-product.html" ? "active" : ""
    }">Add product</a></li>
    <li><a href="edit-product.html" class="${
      pathname === "/edit-product.html" ? "active" : ""
    }">Product</a></li>
    `;
  }

  navContainer.innerHTML += `
        <label class="hamburger-label" for="hamburger-menu">
          <i class="fas fa-bars"></i>
          <i class="fa-solid fa-x"></i>
        </label>
        <input type="checkbox" id="hamburger-menu" />

        <nav>
          <ul>
            <li><a href="index.html" class="${
              pathname === "/index.html" ? "active" : ""
            }">Home</a></li>
            <li><a href="products.html" class="${
              pathname === "/products.html" ? "active" : ""
            }">Product</a></li>
            ${adminNav}
          </ul>
        </nav>

        <a href="index.html" class="header-logo"
          ><img src="img/shoeworld-logo.png" alt="Shoeworld Logo"
        /></a>

        <ul class="nav-icons">
          <li>
            <a href="backoffice.html" aria-label="user"
              ><i class="fa-solid fa-user"></i
            ></a>
          </li>
          <li>
            <a href="cart.html" aria-label="cart"
              ><i class="fa-solid fa-cart-shopping"></i
            ></a>
          </li>
        </ul>
  `;

  const hamburgerContainer = document.querySelector(".hamburger-label");
  const hamburgerLabel = document.querySelector(".fa-bars");
  const closeLabel = document.querySelector(".fa-x");

  closeLabel.style.display = "none";
  let menuOpen = false;

  hamburgerContainer.addEventListener("click", function () {
    if (!menuOpen) {
      hamburgerContainer.classList.add("open");
      hamburgerLabel.style.display = "none";
      closeLabel.style.display = "block";
      menuOpen = true;
    } else {
      hamburgerContainer.classList.remove("open");
      hamburgerLabel.style.display = "block";
      closeLabel.style.display = "none";
      menuOpen = false;
    }
  });
}
