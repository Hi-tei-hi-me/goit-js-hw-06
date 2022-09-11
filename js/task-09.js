"use strict";
const changeColorBtn = document.querySelector("button.change-color");
const color = document.querySelector("span.color");

changeColorBtn.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  color.textContent = currentColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
