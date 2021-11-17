let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  const humanMargin = getAbsoluteDistance(humanGuess, secretNumber);
  const computerMargin = getAbsoluteDistance(computerGuess, secretNumber);
  if (humanMargin === computerMargin) return true;
  return humanMargin < computerMargin;
};

const updateScore = (winner) => {
  switch (winner) {
    case "human":
      return humanScore++;
    default:
      return computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (src, dist) => Math.abs(dist - src);
