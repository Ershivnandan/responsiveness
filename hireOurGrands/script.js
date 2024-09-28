const hamburger = document.querySelector(".hamburger");
const slideDown = document.querySelector(".slideDown");

let isopen = false;
hamburger.addEventListener("click", () => {
  if (!isopen) {
    hamburger.innerHTML = "";
    hamburger.innerHTML = `<i class="fa-solid fa-x"></i>`;
    slideDown.style.display = "block";
    isopen = true;
  } else {
    hamburger.innerHTML = "";
    hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    slideDown.style.display = "none";
    isopen = false;
  }
});
