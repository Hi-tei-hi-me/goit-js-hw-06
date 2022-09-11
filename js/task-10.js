"use strict";
const boxesQty = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("div#boxes");
boxesContainer.style.marginTop = "10px";
boxesContainer.style.display = "flex";
boxesContainer.style.flexDirection = "column";
boxesContainer.style.rowGap = "8px";

createBtn.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(boxesQty.value);
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const galleryItem = document.createElement("div");
    const sizeParam = 30 + i * 10 + "px";
    galleryItem.style.height = sizeParam;
    galleryItem.style.width = sizeParam;
    galleryItem.style.backgroundColor = getRandomHexColor();
    galleryItem.style.border = "1px solid #000";
    boxes.push(galleryItem);
  }
  boxesContainer.append(...boxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
