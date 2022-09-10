"use strict";
const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const products = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.className = "item";
  return item;
});

document.querySelector("ul#ingredients").append(...products);
