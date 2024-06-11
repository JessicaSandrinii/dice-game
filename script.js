// Achieve when I refresh the page the dice ramdomly rerolls the dices
// Function to get a random dice number (1-6)
const getRandomDiceNumber = () => Math.floor(Math.random() * 6) + 1;

// Function to set the dice images based on random numbers
const setRandomDiceImages = () => {
  const dice1 = getRandomDiceNumber();
  const dice2 = getRandomDiceNumber();

  // Get image elements and ensure they exist before setting their src attributes
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");

  if (img1 && img2) {
    img1.src = `./images/dice${dice1}.png`;
    img2.src = `./images/dice${dice2}.png`;
  }
  return [dice1, dice2];
};

// Function to display the winning player based on the dice numbers
const displayWinningPlayer = (dice1, dice2) => {
  const h1 = document.querySelector("h1");
  const p = document.querySelectorAll(".dice p");

  if (h1 && p.length === 2) {
    if (dice1 > dice2) {
      h1.textContent = "Player 1 Wins!🚩";
      p[0].textContent = "Player 1 Wins!🚩";
    } else if (dice2 > dice1) {
      h1.textContent = "Player 2 Wins!🚩";
      p[1].textContent = "Player 2 Wins!🚩";
    } else {
      h1.textContent = "It's a Tie!🚩";
      p[0].textContent = "🚩It's a Tie!";
      p[1].textContent = "It's a Tie!🚩";
    }
  }
};
// Main function to roll the dice and determine the winner
const rollDice = () => {
  const [dice1, dice2] = setRandomDiceImages();
  displayWinningPlayer(dice1, dice2);
};

// Roll the dice when the page is refreshed
window.onload = rollDice;
