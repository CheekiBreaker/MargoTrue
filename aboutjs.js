// about page

const aboutBlock = document.querySelectorAll(".comfortBlock");

window.addEventListener("scroll", (e) => {
  if (pageYOffset >= 720) {
    aboutBlock.forEach((el) => {
      el.classList.add("op");
    });
  } else {
    aboutBlock.forEach((el) => {
      el.classList.remove("op");
    });
  }
});

var items = document.querySelectorAll("ul.offerUl li");
window.addEventListener("scroll", (e) => {
  if (pageYOffset = 500) {
    items.forEach((el, index) => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.opacity = 1;
      }, index * 400);
    });
  }
});
