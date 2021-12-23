//TEST DATA
// const dolphinsAverageScore = (96 + 108 + 89) / 3;

// const koalasAverageScore = (88 + 91 + 110) / 3;

// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore) {
//   console.log(`Dolphins got the highest score!`);
// } else if (koalasAverageScore > dolphinsAverageScore) {
//   console.log(`Koalas got the highest score!`);
// } else {
//   console.log(`Dolphins and Koalas got the same score. It is draw!`);
// }

//BONUS DATA 1 AND 2
const dolphinsAverageScore = (97 + 112 + 101) / 3;

const koalasAverageScore = (109 + 95 + 106) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log(`Dolphins got the highest score!`);
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
  console.log(`Koalas got the highest score!`);
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
  console.log(`Dolphins and Koalas got the same score. It is draw!`);
} else {
  console.log(`No one wins the trophy 😢`);
}
