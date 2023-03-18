//mengambil string JSON dan mengubahnya menjadi objek JavaScript.
const getData = localStorage.getItem("data");
const data = JSON.parse(getData) || [{ email: "admin@gmail.com", password: "Admin123" }];

function signup() {
  var name = document.getElementById("email2");
  var password = document.getElementById("password2");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const check = data.find((a) => a.email === name.value);
  if (name.value.length == 0 && password.value.length == 0) {
    alert("Please fill in email and password");
  } else if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill in password");
  } else if (!name.value.match(validEmail)) {
    alert("You have to provide a valid email address!");
  } else if (check !== undefined) {
    alert("Email already registered");
  } else if (password.value.length > 8) {
    alert("Max of 8");
  } else if (!password.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!password.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!password.value.match(lowerCaseLetters)) {
    alert("please add 1 lowercase letter");
  } else if (check === undefined) {
    data.push({
      email: name.value,
      password: password.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    alert("Congratulations your account has been created");
    window.location.href = "index.html";
  }
}

function sign() {
  var name = document.getElementById("email");
  var password = document.getElementById("password");

  const check = data.find((a) => a.email === name.value && a.password === password.value);

  if (name.value.length == 0 && password.value.length == 0) {
    alert("Please fill in email and password");
  } else if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill in password");
  } else if (check === undefined) {
    alert("Please email and password not registered");
  } else if (check !== undefined) {
    localStorage.setItem("email", name.value);
    localStorage.setItem("password", password.value);
    window.location.href = "homepage.html";
  }
}
