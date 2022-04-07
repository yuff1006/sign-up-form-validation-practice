const signupButton = document.querySelector(".signup-form__button");
class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;
    const inputList = [
      ...this._formEl.querySelectorAll(this._settings.signupItemList),
    ];
    this._inputList = inputList;
  }

  enableValidation() {
    this._disableSubmitButtonUponLoad();
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._inputList.forEach((inputEl) => {
      this._setEventListeners(inputEl);
    });
  }
  _setEventListeners(inputEl) {
    inputEl.addEventListener("input", () => {
      this._checkValidity(inputEl);
      this._toggleButtonState();
    });
  }
  _checkValidity(inputEl) {
    const errorMessage = this._formEl.querySelector(`#${inputEl.id}-error`);
    if (!inputEl.validity.valid) {
      inputEl.classList.add(this._settings.signupFormErrorInput);

      errorMessage.textContent = inputEl.validationMessage;
      errorMessage.classList.add(this._settings.signupFormErrorMessage);
    } else {
      inputEl.classList.remove(this._settings.signupFormErrorInput);
      errorMessage.textContent = "";
      errorMessage.classList.remove(this._settings.signupFormErrorMessage);
    }
  }
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      signupButton.disabled = true;
    } else {
      signupButton.disabled = false;
    }
  }
  _disableSubmitButtonUponLoad() {
    window.addEventListener("load", () => {
      this._toggleButtonState();
    });
  }
  _hasInvalidInput = () => {
    if (this._inputList.some((inputEl) => !inputEl.validity.valid) == true) {
      return true;
    }
    return false;
  };
}
export default FormValidator;
