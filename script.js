function check() {

  let inputFirstName = document.querySelectorAll(".right-side__form__input__textbox")[0];
  let inputLastName = document.querySelectorAll(".right-side__form__input__textbox")[1];
  let inputEmail = document.querySelectorAll(".right-side__form__input__textbox")[2];
  let inputPassword = document.querySelectorAll(".right-side__form__input__textbox")[3];

  const firstNameMessage = document.querySelectorAll(".right-side__form__input__message")[0];
  const lastNameMessage = document.querySelectorAll(".right-side__form__input__message")[1];
  const emailMessage = document.querySelectorAll(".right-side__form__input__message")[2];
  const passwordMessage = document.querySelectorAll(".right-side__form__input__message")[3];

  const firstNameIcon = document.querySelectorAll(".right-side__form__input__img")[0];
  const lastNameIcon = document.querySelectorAll(".right-side__form__input__img")[1];
  const emailIcon = document.querySelectorAll(".right-side__form__input__img")[2];
  const passwordIcon = document.querySelectorAll(".right-side__form__input__img")[3];

  let atPosition = inputEmail.value.indexOf("@");
  let dotPosition = inputEmail.value.lastIndexOf(".");

  // check if any textbox is fill up properly
  if (inputFirstName.value == "" &&
      inputLastName.value == "" &&
      atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= inputEmail.value.length &&
      inputPassword.value == "") {

    // check firs name
    if (inputFirstName.value == "") {
      inputFirstName.style.borderColor = "hsl(0, 100%, 74%)";
      firstNameMessage.style.display = "block";
      firstNameIcon.style.visibility = "visible";
    }

    // check last name
    if (inputLastName.value == "") {
      inputLastName.style.borderColor = "hsl(0, 100%, 74%)";
      lastNameMessage.style.display = "block";
      lastNameIcon.style.visibility = "visible";
    }

    // check email
    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= inputEmail.value.length) {
      inputEmail.style.borderColor = "hsl(0, 100%, 74%)";
      emailMessage.style.display = "block";
      emailIcon.style.visibility = "visible";
    }

    // check password
    if (inputPassword.value == "") {
      inputPassword.style.borderColor = "hsl(0, 100%, 74%)";
      passwordMessage.style.display = "block";
      passwordIcon.style.visibility = "visible";
    }

    // if any of these is missing return the form return false
    return false;
  } else {
    return true;
  }
}
