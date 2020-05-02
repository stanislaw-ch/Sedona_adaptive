var form = document.querySelector(".feedback__form");
var formBtn = document.querySelector(".modal__button--success");
var error = document.querySelector(".modal__error");
var success = document.querySelector(".modal__success");
var closeError = document.querySelector(".modal__button--error");
var closeSuccess = document.querySelector(".modal__button--success");
var feedbackFirstName = form.querySelector("[name=first-name]");
var feedbackSecondName = form.querySelector("[name=second-name]");
var feedbackPhone = form.querySelector("[name=phone]");
var feedbackEmail = form.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if ((!feedbackFirstName.value || !feedbackSecondName.value || !feedbackPhone.value || !feedbackEmail.value)) {
    error.classList.add("modal__error--show");
  } else {
    success.classList.add("modal__success--show");
  }
});

closeError.addEventListener("click", function(evt) {
  evt.preventDefault();
  error.classList.remove("modal__error--show");
});

closeSuccess.addEventListener("click", function(evt) {
  evt.preventDefault();
  success.classList.remove("modal__success--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (error.classList.contains("modal__error--show")) {
      error.classList.remove("modal__error--show");
    } else if (success.classList.contains("modal__success--show")) {
      success.classList.remove("modal__success--show");
    }
  }
});
