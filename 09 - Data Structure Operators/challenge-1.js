'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
console.log('----- Coding Challenge # 1 -----');

//#1
const [playerOne, playerTwo] = game.players;

console.log(playerOne);
console.log(playerTwo);

//#2
const [gk, ...fieldPlayers] = playerOne;

console.log(`Goal Keeper: ${gk}, Players: ${fieldPlayers}`);

//#3
const allPlayers = [...playerOne, ...playerTwo];

console.log(allPlayers);

//#4
const playerOneFinal = [...playerOne, 'Thiago', 'Coutinho', 'Peristic'];

console.log(playerOneFinal);

//#5
const { team1: teamOne, x: draw, team2: teamTwo } = game.odds;

console.log(teamOne, draw, teamTwo);

//#6
const printGoals = function (...playersScored) {
  for (let i = 0; i < playersScored.length; i++) {
    console.log(`${playersScored[i]} scored a goal!`);
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoals(...game.scored);

teamOne < teamTwo && console.log(`Team 1 is more likely to win!`);

teamOne > teamTwo && console.log(`Team 2 is more likely to win!`);
