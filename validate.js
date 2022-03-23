const signupFormList = [...document.querySelectorAll(".signup-form")];
const signupButton = document.querySelector(".signup-form__button");

const checkValidity = (formEl, inputEl, settings) => {
  const errorMessage = formEl.querySelector(`#${inputEl.id}-error`);
  if (!inputEl.validity.valid) {
    inputEl.classList.add(settings.signupFormErrorInput);

    errorMessage.textContent = inputEl.validationMessage;
    errorMessage.classList.add(settings.signupFormErrorMessage);
  } else {
    inputEl.classList.remove(settings.signupFormErrorInput);
    errorMessage.textContent = "";
    errorMessage.classList.remove(settings.signupFormErrorMessage);
  }
};

const hasInvalidInput = (inputList) => {
  if (inputList.some((inputEl) => !inputEl.validity.valid) == true) {
    return true;
  }
  return false;
};

const toggleButtonState = (formEl, settings) => {
  const inputList = [...formEl.querySelectorAll(settings.signupItemList)];
  if (hasInvalidInput(inputList)) {
    signupButton.disabled = true;
  } else {
    signupButton.disabled = false;
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
  signupFormErrorMessage: "signup-form__error-message_active",
  signupForm: ".signup-form",
  signupItemList: ".signup-form__item",
  signupButton: ".signup-form__button",
  signupFormErrorInput: "signup-form__item_error",
});
