const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
const tipTotal = bill * tip;
const totalValue = bill + tipTotal;

console.log(bill, tip);

console.log(`The bill was ${bill}, the tip was ${tipTotal} and the total value is ${totalValue}`);
