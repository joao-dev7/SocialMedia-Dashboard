const input = document.querySelector("input");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const section = document.querySelectorAll("section");
const small = document.querySelector("small");
const p = document.querySelector("p");
const slider = document.querySelector(".slider");
const line = document.querySelector(".horizontalline");

const addDark = (elem) => {
  elem.classList.add("dark");
};
const removeDark = (elem) => {
  elem.classList.remove("dark");
};

input.addEventListener("click", function () {
  if (input.checked) {
    removeDark(body, small, p, line);
    slider.removeAttribute('id')
    removeDark(h1);
    removeDark(h2);
    removeColorSection();
  } else {
    addDark(body, h1, h2, small, p, line);
    slider.id = 'dark'
    addDark(h1);
    addDark(h2);
    addColorSection();
  }
});

function addColorSection() {
  for (i = 0; i < 12; i++) {
    section[i].classList.add("dark");
  }
}
function removeColorSection() {
  for (i = 0; i < 12; i++) {
    section[i].classList.remove("dark");
  }
}
