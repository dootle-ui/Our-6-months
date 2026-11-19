// PASSWORD PROTECTION

const correctPassword = "5/20";

const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

const passwordScreen = document.getElementById("password-screen");
const letterScreen = document.getElementById("letter-screen");

passwordForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {

    // Hide the envelope screen
    passwordScreen.classList.add("hidden");

    // Reveal the anniversary letter
    letterScreen.classList.remove("hidden");

  } else {

    // Show an error for an incorrect password
    errorMessage.textContent = "That's not quite right. Try again, love ♡";

    passwordInput.value = "";
    passwordInput.focus();
  }
});
