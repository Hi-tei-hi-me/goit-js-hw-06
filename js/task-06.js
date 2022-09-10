"use strict";
const user = document.querySelector("#validation-input");

user.addEventListener("blur", () => {
  user.className = user.value.length < 6 ? "invalid" : "valid";
});
