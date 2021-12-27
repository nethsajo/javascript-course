const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

//Bonus
const calcAverage = function (arr) {
  let sum = 0;
  let average = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    sum = sum + arr[i];
    average = sum / arr.length;
  }
  console.log(`Total Sum: ${sum}`);
  console.log(`Average: ${average}`);
};

//Call the calc average function
calcAverage(total);
