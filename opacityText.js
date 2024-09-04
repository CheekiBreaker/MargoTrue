const txt = document.querySelectorAll(".getBlockTitle");
const blocks = document.querySelectorAll(".advantageBlock");
const windowHeight = window.innerHeight;

window.addEventListener("scroll", (e) => {
  if (pageYOffset >= 1120) {
    txt.forEach((el) => el.classList.add("op"));
  } else {
    txt.forEach((el) => {
      el.classList.remove("op");
    });
  }
});

window.addEventListener("scroll", () => {
  blocks.forEach((block) => {
    const rect = block.getBoundingClientRect();
    if (rect.top + 200 < windowHeight && rect.bottom > 100) {
      block.classList.add("visible");
    } else {
      block.classList.remove("visible");
    }
  });
});

const popup = document.getElementById("popup");
const popupDescription = document.getElementById("popupDescription");
const popupName = document.querySelector(".popupName");
const popupImage = document.getElementById("popupImage");
const popupCost = document.getElementById("popupCost");
const closePopup = document.getElementById("closePopup");
const detailButtons = document.querySelectorAll(".details");

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const description = button.getAttribute("data-description");
    const cost = button.getAttribute("data-cost");
    const name = button.getAttribute("data-name");
    const image = button.getAttribute("data-img");

    const formattedDescription = description
      .replace(/(\?\?\?\?)/g, "<strong>$1</strong>") // Пример замены смайлов на жирный текст
      .replace(/\n/g, "<br>"); // Заменяем переносы строк на <br>

    popupName.textContent = name;
    popupDescription.innerHTML = formattedDescription;
    popupCost.textContent = cost;
    popupImage.src = image;
    popup.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

//

