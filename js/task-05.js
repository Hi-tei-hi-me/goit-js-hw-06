"use strict";
const user = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

user.addEventListener("input", () => {
  output.textContent = user.value === "" ? "Anonymous" : user.value;
});
