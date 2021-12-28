'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

// const x = () => {
//   console.log(23);

//Changing the text content after clicking button
//   document.querySelector('.message').textContent = '🎉 Correct Number!';
// };

// document.querySelector('.check').addEventListener('click', x);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Set the initial values of score and highscore
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//The first argument that we need to past in addEventListener function is the type of the event and in this case, it's just a simple click. The second argument is the function that should be executed whenever this click event happens

document.querySelector('.check').addEventListener('click', function () {
  //First convert the string to a number using the Number function of javascript, by default it is a string
  const guess = Number(document.querySelector('.guess').value);

  //Logic: The first thing to do is to check if there is actually is a value and if ther is no value then we print something to the console as a response. When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    //Changing the background color and the width of secret number box when the player guess the correct number
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Check if the score is greater than the highscore
    if (score > highscore) {
      //If the score is greater than the highscore then set the highscore with the new current score
      highscore = score;

      //Display the highscore
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is not equal to secretNumber or wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //Checking the guess number if its greater than secretNumber. This will print a too high or too low message and decrease the score if the player guess a high number or lower than the secret number
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😞 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Challenge # 1
document.querySelector('.again').addEventListener('click', function () {
  //1
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //3
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;

  //4
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
