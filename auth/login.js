const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const password = document.getElementById("password-field")

password.addEventListener('change',()=>{
  loginButton.style.display="block"
})