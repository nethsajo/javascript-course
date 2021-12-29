'use strict';

//Selecting elements
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const playerOneScoreElement = document.getElementById('score--0');
const playerTwoScoreElement = document.getElementById('score--1');

const currentScoreElementOne = document.getElementById('current--0');
const currentScoreElementTwo = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = () => {
  //Store the scores of the players
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  playerOneScoreElement.textContent = 0;
  playerTwoScoreElement.textContent = 0;
  currentScoreElementOne.textContent = 0;
  currentScoreElementTwo.textContent = 0;

  //Hide the dice by default
  diceElement.classList.add('hidden');
  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
};

//Call the iniital function
init();

const switchPlayer = () => {
  //Reset the score of the current player if rolled 1
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  //switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;

  console.log(`Active Player: ${activePlayer}`);
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //3. Check for rolled 1
    if (dice !== 1) {
      //Add dice to the currentScore
      currentScore += dice;

      //Displaying the score to the current player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score

    //Assume the current player is 1
    //scores[1] = scores[1] + currentScore;

    //Storing the active player's score in the array
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    console.log(scores);
    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      //Display the winner of the game
      document.getElementById(`name--${activePlayer}`).textContent = `Player ${
        activePlayer === 0 ? '1' : '2'
      } Wins!`;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switch to the next player
      switchPlayer();
    }
  }
});

//Reset the game
btnNew.addEventListener('click', init);
