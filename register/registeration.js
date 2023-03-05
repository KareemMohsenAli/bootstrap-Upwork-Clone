var username = $("#username");
var email = $("#email");
var password = $("#password");
var password2 = $("#checkpassword");
var button = $("#btn");
var gender = $("#gender");
var phone = $("#phoneNumber");
var image = $("#image");
console.log(password2);

$("#from").on("submit", function (e) {
  e.preventDefault();
  validateInputs();
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validateInputs();
//   // creatUser();
// });
// function creatUser() {
//   fetch(`http://localhost:3000/user/register`, {
//     method: "POST",
//     body: JSON.stringify({
//       name: username.value,
//       email: email.value,
//       phone: phone.value,
//       password: password.value,
//       gender: gender.value,
//       // image: image.value,
//     }),
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   })
//     .then((res) => res.json())
//     .then(apicomes);
// }

// function uploadImg(id) {
//   let formData = new FormData();
//   formData.append("profile", image.files[0]);
//   fetch("http://localhost:3000/user/profileImg/" + id, {
//     method: "POST",
//     body: formData,
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// }

// function apicomes(user) {
//   if (user.apiStatus) {
//     console.log(user.apiStatus);
//     uploadImg(user.data._id);
//   } else {
//     console.log(user);
//     setError(email, "your email is already required");
//   }
// }

// setError = (element, message) => {
//   //div
//   const inputControl = element.parentElement;

//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = message;
//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");
// };

// const setSuccess = (element) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = "";
//   inputControl.classList.add("success");
//   inputControl.classList.remove("error");
// };

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
// }

const validateInputs = () => {
  var flag;
  var arr = [];
  var usernameValue = username.val();
  var emailValue = email.val();
  var passwordValue = password.val();
  var password2Value = password2.val();
  var lowerCaseLetters = /[a-z]/g;
  //username

  if (usernameValue === "") {
    var flag = false;
    // setError(username, "Username is required");
    $("#first").text("Username is required");
    $("#first").css({ color: "red" });
    $("#username").css({ border: "2px solid red" });
  } else if (usernameValue.length <= 3) {
    var flag = false;
    // setError(username, "Username must be at least 4 character");
    $("#first").text("Username must be at least 4 character");
    $("#first").css({ color: "red" });
    $("#username").css({ border: "2px solid red" });
  } else if (!username.val().match(lowerCaseLetters)) {
    var flag = false;
    // setError(username, "Username must be strings only");
    $("#first").text("Username must be strings only");
    $("#first").css({ color: "red" });
    $("#username").css({ border: "2px solid red" });
  } else {
    // setSuccess(username);
    $("#first").css({ display: "none" });
    $("#username").css({ border: "2px solid green" });

    var flag = true;
  }
  //email

  if (emailValue === "") {
    var flag = false;
    // setError(email, "Email is required");
    $("#second").text("Email is required");
    $("#second").css({ color: "red" });
    $("#email").css({ border: "2px solid red" });
  } else if (!isValidEmail(emailValue)) {
    var flag = false;
    // setError(email, "Provide a valid email address");
    $("#second").text("Provide a valid email address");
    $("#second").css({ color: "red" });
    $("#email").css({ border: "2px solid red" });
  } else {
    // setSuccess(email);
    $("#second").css({ display: "none" });
    $("#email").css({ border: "2px solid green" });
    var flag = true;
  }
  //password

  if (passwordValue === "") {
    var flag = false;
    // setError(password, "Password is required");
    $("#third").text("Password is required");
    $("#third").css({ color: "red" });
    $("#password").css({ border: "2px solid red" });
  } else if (passwordValue.length < 8) {
    var flag = false;
    // setError(password, "Password must be at least 8 character.");
    $("#third").text("Password must be at least 8 character.");
    $("#third").css({ color: "red" });
    $("#password").css({ border: "2px solid red" });
  } else {
    // setSuccess(password);
    $("#third").css({ display: "none" });
    $("#password").css({ border: "2px solid green" });
    var flag = true;
  }
  //passwordchecked

  if (password2Value === "") {
    var flag = false;
    // setError(password2, "Please confirm your password");
    $("#forth").text("Please confirm your password");
    $("#forth").css({ color: "red" });
    $("#checkpassword").css({ border: "2px solid red" });
  } else if (password2Value !== passwordValue) {
    var flag = false;
    // setError(password2, "Passwords doesn't match");
    $("#forth").text("Passwords doesn't match");
    $("#forth").css({ color: "red" });
    $("#checkpassword").css({ border: "2px solid red" });
  } else {
    // setSuccess(password2);
    $("#forth").css({ display: "none" });
    $("#checkpassword").css({ border: "2px solid green" });
    var flag = true;
  }
  if (flag) {
    var data = {
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      password2: password2Value,
    };
    arr.push(data);
    localStorage.setItem("Users", JSON.stringify(arr));
  } else {
    return;
  }
};

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   checkInputs();
// });
// function checkInputs() {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const checkpasswordValue = checkPassword.value.trim();
// }
