'use strict';

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log('----- Challenge #3 -----');

// #1 - Convert map to array
const events = [...new Set(gameEvents.values())];

console.log(events);

// #2
gameEvents.delete(64);

console.log(events);

const gameSize = gameEvents.size;

// #3
console.log(`An event happend, on average, every ${90 / gameSize} minutes`);

// #4
for (const [minutes, type] of gameEvents) {
  const result =
    minutes <= 45
      ? `[FIRST HALF] ${minutes}: ${type}`
      : `[SECOND HALF] ${minutes}: ${type}`;
  console.log(result);
}
