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

console.log('----- Challenge #2 -----');

const gameScorer = Object.entries(game.scored);

//#1
for (const [index, player] of gameScorer) {
  console.log(`Goal ${Number(index) + 1}: ${player}`);
}

const oddsScore = Object.values(game.odds);

//#2
let average = 0;
for (const item of oddsScore) {
  average = average + item;
}

console.log(`Average: ${average / oddsScore.length}`);

//#3
const odds = Object.entries(game.odds);

for (const [team, odd] of odds) {
  const result = team === 'x' ? `draw` : `victory ${game[team]}`;

  console.log(`Odd of ${result} ${odd}`);
}

//BONUS
const scorers = {};

for (const players of game.scored) {
  scorers[players] ? scorers[players]++ : (scorers[players] = 1);
}
console.log(scorers);
