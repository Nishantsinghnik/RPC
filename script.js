let userScore = 0;
let compScore = 0;

const userImg = document.querySelector(".userchoice img");
const compImg = document.querySelector(".compchoice img");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const updateImages = (userChoice, compChoice) => {
  userImg.src = `${userChoice}.png`;
  compImg.src = `${compChoice}.png`;
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  updateImages(userChoice, compChoice);

  if (userChoice === compChoice) {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "black";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    msg.innerText = "You Win";
    msg.style.backgroundColor = "green";
    userScore++;
    userScorepara.innerText = userScore;
  } else {
    msg.innerText = "You Lose";
    msg.style.backgroundColor = "red";
    compScore++;
    compScorepara.innerText = compScore;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
