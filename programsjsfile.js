const num1 = Number(prompt("Enter first number"));
const random = prompt("Enter operator");
const num2 = Number(prompt("Enter second number"));
if (random === "+") {
  console.log(num1 + num2);
} else if (random === "-") {
  console.log(num1 - num2);
} else if (random === "*") {
  console.log(num1 * num2);
} else if (random === "/") console.log(num1 / num2);
else if (random === "%") console.log(num1 % num2);
else console.log("Enter correct data");

const number = Math.floor(Math.random() * 11);
let chances = 5;
console.log("Welcome to number guessing game");
console.log("You have 5 chances left to guess a correct number");
while (chances > 0) {
  const userGuess = +prompt("Guess a number between 0 - 10");
  if (userGuess > 10 || userGuess < 0) {
    console.log("Guess a correct number between 0 - 10");
  } else {
    if (userGuess === number) {
      console.log("You won the game");
      break;
    } else if (userGuess > number) {
      console.log("Guess a smaller number");
    } else if (userGuess < number) {
      console.log("Guess a bigger number");
    } else {
      console.log("Something went wrong");
    }
  }
  chances--;
  console.log("You have ", chances, " chances left");
}
if (chances === 0) {
  console.log("Game over");
}
