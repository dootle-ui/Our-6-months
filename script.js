
document.addEventListener("DOMContentLoaded", function () {

  const correctPassword = "May 20";

  const passwordInput = document.getElementById("password");
  const unlockButton = document.getElementById("unlock-button");
  const passwordScreen = document.getElementById("password-screen");
  const letterScreen = document.getElementById("letter-screen");
  const errorMessage = document.getElementById("error-message");
  const envelope = document.querySelector(".envelope");

  unlockButton.addEventListener("click", function () {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

      errorMessage.textContent = "";
      unlockButton.disabled = true;
      unlockButton.textContent = "Opening your letter...";

      // Start envelope opening animation
      envelope.classList.add("opening");

      // Reveal the letter after the animation
      setTimeout(function () {

        passwordScreen.classList.add("hidden");
        letterScreen.classList.remove("hidden");

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }, 1000);

    } else {

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
