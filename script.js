const input = document.getElementById("email__input");
const button = document.getElementById("submit__button");
const form = document.getElementById("submit__form");
const error = document.getElementById("error__message");
const defaultState = document.getElementById("default-state");
const dismissButton = document.getElementById("dismiss__button");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateEmail(input) == true) {
    displaySuccessMessage(input);
  } else {
    displayErrorMessage();
  }
});

function validateEmail(emailId) {
  var mailformat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailId.value.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

function displayErrorMessage() {
  error.style.display = "flex";
  input.style.border = "1px solid red";
}

function displaySuccessMessage(emailId) {
  defaultState.style.display = "none";
  document.getElementById("success-state").style.display = "flex";
  document.getElementById("email-display").innerHTML = emailId.value;
  document.getElementById("email-display").style.fontWeight = "bold";
}

// DismissButton
dismissButton.addEventListener("click", function (e) {
  location.reload();
});
