let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("btn");
let errorSms = document.querySelector(".error-message");
let passwordFormat = document.getElementById("passwordFormat");

// fname.addEventListener('keyup', ffname);
// lname.addEventListener('keyup', flname);
// email.addEventListener('keydown', fEmail);
// password.addEventListener('keyup', fPassword);

function ffname() {
  // verify if input value is valid
  let name = document.getElementById("fname").value;
  if (name.length < 1) {
    fname.parentElement.classList.add("invalidLine");
    fname.classList = "error-icon";
    fname.nextElementSibling.classList = "error-message";
  } else {
    fname.parentElement.classList.remove("invalidLine");
    fname.nextElementSibling.classList = "hide-error-message";
    fname.classList = "";
  }
}

function flname() {
  // verify if input value is valid
  let name = lname.value;
  if (name.length < 1) {
    lname.parentElement.classList.add("invalidLine");
    lname.classList = "error-icon";
    lname.nextElementSibling.classList = "error-message";
  } else {
    lname.parentElement.classList.remove("invalidLine");
    lname.classList = "";
    lname.nextElementSibling.classList = "hide-error-message";
  }
}

function fEmail() {
  let emailValue = email.value;

  if (emailValue.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)) {
    //add on submit button
    email.parentElement.classList.remove("invalidLine");
    email.classList = "";
    email.nextElementSibling.classList = "hide-error-message";
  } else {
    email.value = "email@example/com";
    email.parentElement.classList.add("invalidLine");
    email.classList = "error-icon";
    email.nextElementSibling.classList = "error-message";
    email.setAttribute("class", "emailExample error-icon ");
  }
  return true;
}

function fPassword() {
  let passwordValue = password.value;
  //check for password match

  if (
    passwordValue.match(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    )
  ) {
    password.classList = "";
    password.nextElementSibling.classList =
      " passwordFormat hidepasswordformat";
    password.parentElement.classList.remove("invalidLine");
  } else {
    password.classList = "error-icon";
    password.nextElementSibling.classList = "passwordFormat showpasswordformat";
    password.parentElement.classList.add("invalidLine");
  }

  //display error if password input value is empty
  if (passwordValue == "") {
    passwordFormat.nextElementSibling.classList = "error-message";
    password.nextElementSibling.classList =
      " passwordFormat hidepasswordformat";
  } else {
    passwordFormat.nextElementSibling.classList = "hide-error-message";
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  ffname();
  flname();
  fEmail();
  fPassword();
});
