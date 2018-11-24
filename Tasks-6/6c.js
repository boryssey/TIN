function validateEmail() {
  var emailRegex = /[a-zA-Z\d]+@[a-zA-Z]+\.[a-z]+/;
  var email = document.getElementById('email').value;
  var emailValid = emailRegex.test(email);
  return emailValid;
}

function validateNumerical() {
  var numRegex = /^\d+$/;
  var numInput = document.getElementById('numeric').value;
  var numValid = numRegex.test(numInput);
  return numValid;
}

function validate() {
  if (!validateEmail()) {
    document.getElementById('email').style.backgroundColor = "#ed6b40";
    document.getElementById('emailError').textContent = "Invalid Email";
  } else {
    document.getElementById('email').style.backgroundColor = "#32e82c";
    document.getElementById('emailError').textContent = "";
  }
  if (!validateNumerical()) {
    document.getElementById('numeric').style.backgroundColor = "#ed6b40";
    document.getElementById('numericError').textContent = "Not a numeric";
  } else {
    document.getElementById('numeric').style.backgroundColor = "#32e82c";
    document.getElementById('numericError').textContent = "";
  }
}
