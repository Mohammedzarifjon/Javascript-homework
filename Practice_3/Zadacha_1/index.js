const password = "qwerty";

const form = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const resultElement = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const confirmPassword = passwordInput.value;

  if (password === confirmPassword) {
    resultElement.textContent = "Пароли совпадают";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Пароли не совпадают";
    resultElement.style.color = "red";
  }
});