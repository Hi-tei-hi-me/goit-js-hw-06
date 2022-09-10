"use strict";
let counterValue = 0;
const counter = document.querySelector("#counter");
const value = counter.querySelector("#value");

counter.querySelector('button[data-action="decrement"]').addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});
counter.querySelector('button[data-action="increment"]').addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});

function updateValue() {
  value.textContent = counterValue;
}
