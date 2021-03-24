let sNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess == sNumber) {
    document.querySelector(".message").textContent = "correct number";
    document.querySelector(".btn-check").textContent = sNumber;

    document.querySelector("body").style.backgroundColor = "yellow";
    document.querySelector(".btn-check").style.width = "100px";
  } else if (guess > sNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;

      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
    }
  } else if (guess < sNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  sNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".btn-check").textContent = "?";
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundColor = "green";
});
