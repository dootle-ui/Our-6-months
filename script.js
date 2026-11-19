
document.addEventListener("DOMContentLoaded", function () {

  const correctPassword = "5/20";

  const passwordInput = document.getElementById("password");
  const unlockButton = document.getElementById("unlock-button");
  const passwordScreen = document.getElementById("password-screen");
  const letterScreen = document.getElementById("letter-screen");
  const errorMessage = document.getElementById("error-message");

  console.log("Anniversary website JavaScript loaded!");

  unlockButton.addEventListener("click", function () {

    console.log("Unlock button clicked!");

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

      console.log("Correct password!");

      errorMessage.textContent = "";

      passwordScreen.classList.add("hidden");
      letterScreen.classList.remove("hidden");

      window.scrollTo(0, 0);

    } else {

      console.log("Incorrect password!");

      errorMessage.textContent = "Not quite! Try again, my love ♡";
      passwordInput.value = "";
      passwordInput.focus();

    }

  });

  passwordInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      unlockButton.click();
    }
  });

});
