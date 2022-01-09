//Challenge # 1
// const checkDogs = function (dogsJulia, dogsKate) {
//   const copyDogsJulia = [...dogsJulia].splice(1, 2);

//   console.log(copyDogsJulia);

//   const dogs = copyDogsJulia.concat(dogsKate);

//   dogs.forEach(function (age, i) {
//     const checkAge =
//       age >= 3 ? `is an adult, and is ${age} years old` : `is still a puppy 🐶`;

//     console.log(`Dog number ${i + 1} ${checkAge}`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Challenge # 2
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const humanAdult = humanAge.filter(age => age >= 18);

//   const averageHumanAge =
//     humanAdult.reduce((acc, current) => acc + current, 0) / humanAdult.length;

//   console.log(humanAge);
//   console.log(humanAdult);
//   console.log(`Average: ${averageHumanAge}`);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//Challenge # 3
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//   return humanAge;
// };

// const averageOne = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const averageTwo = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(averageOne, averageTwo);

//Challenge # 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(function (value, i) {
  const { weight } = value;

  dogs[i].recommendedFood = Math.trunc(weight ** 0.75 * 28);
});

console.log(dogs);

// 2.
const dogsSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogsSarah);

console.log(
  `Sarah's dog is eating too ${
    dogsSarah.curFood > dogs.recommendedFood ? 'much' : 'little'
  }`
);

// 3 and 4
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too litte!`);

// 5.
const exactFood = dogs.some(dog => dog.curFood === dog.recommendedFood);

console.log(exactFood);

// 6.
const checkOkayFood = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkOkayFood));

// 7.
console.log(dogs.filter(checkOkayFood));

// 8.
const dogsSort = dogs
  .slice()
  .sort((x, y) => x.recommendedFood - y.recommendedFood);

console.log(dogsSort);
