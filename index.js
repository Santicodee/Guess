let secretNumber = Math.floor(Math.random() * 20) + 1;
let limitNumber = 21;
let score = 20;
let highscore = 0;
const winner = new Audio("assets/yey.mp3");
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("input").value);

  if (!guess) {
    document.querySelector(".message").textContent = " 🚫No number";
  } else if (guess >= limitNumber || guess < 0) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 👨‍🦯Are you blind???";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".message").textContent = "LOSERRR HAHAHA";
      document.querySelector(".score").innerHTML = 0;
    }
  } else if (guess === secretNumber) {
    winner.play();
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉You are correct";
    document.querySelector("body").style.backgroundColor = "#7CFC00";
    if (score > highscore)
      document.querySelector(".highScore").innerHTML = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high" : "Too low";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".message").textContent = "LOSERRR HAHAHA";
      document.querySelector(".score").innerHTML = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".score").innerHTML = score;
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector("input").value = "";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector("body").style.backgroundColor = "gray";
});
