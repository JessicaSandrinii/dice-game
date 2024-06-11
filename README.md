# 🎲Dice Game🎲

This project simulates a simple dice game where two dice are rolled, and the result is displayed on a web page. The game determines the winner based on the dice rolls or declares a tie.

![Dice 6](images/dice6.png)

## Features

- Randomly rolls two dice upon page load.
- Updates the dice images based on the roll.
- Displays a message indicating which player won or if it's a tie.

## How to Run

This project is hosted on GitHub Pages, making it easy to view and interact with. To access the game, simply click the link below:

[Play the Dice Game](https://jessicasandrinii.github.io/dice-game/)

## Technologies Used

- HTML
- CSS
- JavaScript

## Code Explanation

### getRandomDiceNumber

Generates a random number between 1 and 6.

```javascript
const getRandomDiceNumber = () => Math.floor(Math.random() * 6) + 1;
```
