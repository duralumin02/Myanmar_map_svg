let currentPlace = document.querySelector(".current-place");
let allPath = document.querySelectorAll(".map path");

allPath.forEach((x) => {
  x.addEventListener("mouseover", () => {
    allPath.forEach((e) => e.classList.remove("active"));
    x.classList.add("active");
    currentPlace.innerText = x.getAttribute("title");
  });
});

document.querySelector("[title='Ayeyarwady']").classList.add("active");
currentPlace.innerText = "Ayeyarwady";
