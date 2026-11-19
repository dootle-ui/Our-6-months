
const correctPassword = "5/20";

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlock-button");
const passwordScreen = document.getElementById("password-screen");
const letterScreen = document.getElementById("letter-screen");
const errorMessage = document.getElementById("error-message");

function openLetter() {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    errorMessage.textContent = "";

    passwordScreen.classList.add("hidden");
    letterScreen.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    errorMessage.textContent = "Not quite! Try again, my love ♡";
    passwordInput.value = "";
    passwordInput.focus();
  }
}

unlockButton.addEventListener("click", openLetter);

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    openLetter();
  }
});
