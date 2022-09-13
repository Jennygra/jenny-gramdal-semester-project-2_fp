const logOutBtn = document.querySelector("#log_out-btn");

logOutBtn.onclick = function () {
  const doLogout = confirm("You sure you want to log out?");

  if (doLogout) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    location.href = "index.html";
  }
};
