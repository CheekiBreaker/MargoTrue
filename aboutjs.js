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

