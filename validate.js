const errorMessages = {
  "singup-first-name-error": "First Name cannot be empty",
  "singup-last-name-error": "Last Name cannot be empty",
  "signup-email-error": "Looks like this is not an email",
  "signup-password-error": "Password cannot be empty",
};

const signupFormList = [...document.querySelectorAll(".signup-form")];
const signupButton = document.querySelector(".signup-form__button");

const checkValidity = (formEl, inputEl, settings) => {
  if (!inputEl.validity.valid) {
    inputEl.classList.add(settings.signupFormErrorInput);
    const errorMessage = formEl.querySelector(`#${inputEl.id}-error`);
    errorMessage.textContent = errorMessages[`${errorMessage.id}`];
    errorMessage.classList.add(settings.signupFormErrorMessage);
  } else {
    inputEl.classList.remove(settings.signupFormErrorInput);
  }
};

const hasInvalidInput = (inputList) => {
  inputList.some((inputEl) => !inputEl.validity.valid);
};

const toggleButtonState = (formEl, settings) => {
  const inputList = [...formEl.querySelectorAll(settings.signupItemList)];
  if (hasInvalidInput(inputList)) {
    settings.signupButton.disabled = true;
  } else {
    settings.signupButton.disabled = false;
  }
};
const setEventListeners = (inputEl, formEl, settings) => {
  inputEl.addEventListener("input", () => {
    checkValidity(formEl, inputEl, settings);
    toggleButtonState(formEl, settings);
  });
};

const enableValidation = (settings) => {
  signupFormList.forEach((formEl) => {
    const signupInputList = [
      ...formEl.querySelectorAll(settings.signupItemList),
    ];
    signupInputList.forEach((inputEl) => {
      setEventListeners(inputEl, formEl, settings);
    });
  });
};

enableValidation({
  signupFormErrorMessage: ".signup-form__error-message",
  signupForm: ".signup-form",
  signupItemList: ".signup-form__item",
  signupButton: ".signup-form__button",
  signupFormErrorInput: ".signup-form__item_error",
});
