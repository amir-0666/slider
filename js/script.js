"use strict";
const divEls = document.querySelectorAll(".slider div");
const removeActiveClass = () => {
  for (let i = 0; i < divEls.length; i++) {
    divEls[i].classList.remove("active");
  }
};

for (let i = 0; i < divEls.length; i++) {
  divEls[i].addEventListener("click", () => {
    removeActiveClass();
    divEls[i].classList.add("active");
  });
}
