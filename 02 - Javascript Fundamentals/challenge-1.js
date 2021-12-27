const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

function checkWinner(averageDolphins, averageKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
  } else {
    console.log(`No one wins!`);
  }
}

let dolphinsAverage = calcAverage(44, 23, 71);

let koalasAverage = calcAverage(65, 54, 49);

checkWinner(dolphinsAverage, koalasAverage);

//Data 2
dolphinsAverage = calcAverage(85, 54, 41);

koalasAverage = calcAverage(23, 34, 27);

checkWinner(dolphinsAverage, koalasAverage);
