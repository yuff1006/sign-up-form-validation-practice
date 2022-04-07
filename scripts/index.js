import FormValidator from "./FormValidator.js";
const settings = {
  signupFormErrorMessage: "signup-form__error-message_active",
  signupForm: ".signup-form",
  signupItemList: ".signup-form__item",
  signupButton: ".signup-form__button",
  signupFormErrorInput: "signup-form__item_error",
};
const theFormEl = document.querySelector(".signup-form");
const theForm = new FormValidator(settings, theFormEl);
theForm.enableValidation();
