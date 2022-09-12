"use strict";
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (form.email.value === "" || form.password.value === "") {
    alert("Все поля должны быть заполнены.");
    return;
  }
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
}
