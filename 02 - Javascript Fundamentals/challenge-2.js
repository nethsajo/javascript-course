const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  return tip;
};

//Test Data
const bills = [125, 555, 44];

//Tips
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//Total Array
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//Bonus
console.log(totals);
