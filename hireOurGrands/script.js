const hamburger = document.querySelector(".hamburger");
const slideDown = document.querySelector(".slideDown");
const listItems = document.querySelectorAll(".options ul li");
const border = document.querySelector(".options p");
const contents = document.querySelectorAll(".option-content");
const acc = document.getElementsByClassName("accordion");
const whyFrom = document.getElementById("whyFromGrid");

let activeIndex = 0;
let isopen = false;

const detailData = [
  {
    img: "./images/code.png",
    txt: "1200+ hours of coding experience",
  },
  {
    img: "./images/tick.png",
    txt: "100 hours of soft skills training",
  },
  {
    img: "./images/users.png",
    txt: "Inter & intra team collaboration skills",
  },
  {
    img: "./images/message.png",
    txt: "Strong communication skills",
  },
  {
    img: "./images/head-cog.png",
    txt: "Wholistic Skill Development",
  },
  {
    img: "./images/rupee.png",
    txt: "No Hiring Charges",
  },
];

hamburger.addEventListener("click", () => {
  if (!isopen) {
    hamburger.innerHTML = "";
    hamburger.innerHTML = `<i class="fa-solid fa-x"></i>`;
    slideDown.style.display = "block !important";
    isopen = true;
  } else {
    hamburger.innerHTML = "";
    hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    slideDown.style.display = "none";
    isopen = false;
  }
});

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const liOffset = item.offsetLeft;
    border.style.left = `${liOffset}px`;
    border.style.width = `${item.offsetWidth}px`;

    contents.forEach((content) => {
      content.classList.remove("sliderVisibility");
    });

    contents[index].classList.add("sliderVisibility");

    activeIndex = index;
  });
});

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

detailData.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML=`
    <div>
      <img src=${item.img} alt="" />
    </div>
    <div>
      <p>${item.txt}</p>
    </div>
  `

  whyFrom.appendChild(card)
});
