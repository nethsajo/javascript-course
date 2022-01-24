console.log('--- SIMPLE ARRAY METHODS ---');

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE - returns selected elements in an array, as a new array. (SHALLOW COPY)
console.log(arr.slice(2)); //['c', 'd', 'e']

//can select from a given start, up to a (not inclusive) given end.
console.log(arr.slice(2, 4)); //['c', 'd']

//if the argument is negative, it will start to copy from the end of the array
console.log(arr.slice(-2)); //['d', 'e']
console.log(arr.slice(-1)); //['e']
console.log(arr.slice(1, -2)); //['b', 'c']
console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']
console.log([...arr]); //['a', 'b', 'c', 'd', 'e']

//SPLICE - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// console.log(arr.splice(2));

//Delete one or more elements from an array using splice
console.log(arr.splice(-1)); //['e']
console.log(arr);
console.log(arr.splice(1, 2)); //['a', 'd', 'e'] //Deleted c, b
console.log(arr);

//REVERSE - reveres the elements in an array in place. This method mutates the array and returns a reference to the same array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT - combines two or more arrays. This returns a new array without modifying any existing arrays
const letters = arr.concat(arr2);
console.log(letters);

//Could simply also do this
console.log([...arr, ...arr2]);

//JOIN - adds all the elements of an array into a string, separated by the specified separator string.
console.log(letters.join(' - '));

/////////////////////////////////////////////////

console.log('--- The new at Method ---');

const arrNumbers = [23, 11, 64];
console.log(arrNumbers[0]);

//AT - method takes an integer value and returns the item at that index
console.log(arrNumbers.at(1)); //11

//Getting the last element of an array using other method
console.log(arrNumbers[arrNumbers.length - 1]); //64

console.log(arrNumbers.slice(-2)[0]); //returns [11, 64] but it will get the value of index 0 = 11

//Getting the last element of an array using at method
console.log(arrNumbers.at(-1)); //64

console.log('Kenneth'.at(0)); //K

/////////////////////////////////////////////////

console.log('--- Looping Arrays: forEach ---');

//The forEach method does not create a new array, just loops over it

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited: ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew: ${Math.abs(movement)}`);
//   }
// }

// console.log('----- FOREACH -----');
// movements.forEach(function (moves, i, arr) {
//   if (moves > 0) {
//     console.log(`Movement ${i + 1}: You deposited: ${moves}`);
//   } else {
//     console.log(`Movement ${i}:You withdrew: ${Math.abs(moves)}`);
//   }
// });

//0: function(200)
//1: function(450)
//2: function(-400)

/////////////////////////////////////////////////

console.log('--- forEach with Maps and Sets ---');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//MAP
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SETS
const currenciesUniques = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUniques);

//SETS
currenciesUniques.forEach(function (value, _, sets) {
  //sets - doesn't have keys and indexes either

  //_ - underscore variables are JavaScript's a throwaway variable so that means a variable that is completely unnecessary
  console.log(`${_}: ${value}`);
});

/////////////////////////////////////////////////

console.log('--- map, filter and reduce ---');

//map - returns new array containing the results of applying an operation on all original array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// const movementsUSD = movementsEU.map(function (move) {
//   return move * euroToUsd;
// });

const movementsUSD = movements.map(move => move * euroToUsd);

console.log(movementsUSD);

// const moves = [];
// for (const move of movements) {
//   moves.push(move * euroToUsd);
// }

// console.log(moves);

// const movementDescription = movementsUSD.map(
//   (move, i) =>
//     `Movement ${i + 1}: You ${move > 0 ? 'deposited' : 'withdrew'}: ${Math.abs(
//       move
//     )}`
// );

// console.log(movementDescription);

//filter = returns a new array containing the array elements that passed a specified test condition

const deposits = movements.filter(function (move) {
  return move > 0;
});
console.log(deposits);

const depositsFor = [];
for (const move of movements) {
  if (move > 0) depositsFor.push(move);
}
console.log(depositsFor);

const withdrawals = movements.filter(move => move < 0);
console.log(withdrawals);

//reduce - boils('reduces') all array elements down to one single value (e.g adding all elements together)

//The first parameter of reduce is called accumulator. This accumulator is essentialy like a snowball that keeps accumulating the value

//The second parameter of reduce method is the initial value of the accumulator
const balance = movements.reduce(function (acc, current, i) {
  console.log(`Iteration ${i + 1}: ${acc}`);
  return acc + current;
}, 0);

// const balance = movements.reduce((acc, curr) => acc + curr, 0);

console.log(balance);

let balanceFor = 0;
for (const move of movements) {
  balanceFor = balanceFor + move;
}
console.log(balanceFor);

//Maximum Value of movements using reduce
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const checkMaximumValue = movements.reduce(
//   (previous, current, index, array) => {
//     if (previous > current) {
//       console.log(
//         `index: ${index}, previous: ${previous}, current: ${current}, returns: ${previous}`
//       );
//       return previous;
//     } else {
//       console.log(
//         `index: ${index}, previous: ${previous}, current: ${current}, returns: ${current}`
//       );
//       return current;
//     }
//   },
//   movements[0]
// );
// console.log(checkMaximumValue);

/////////////////////////////////////////////////

console.log('--- The Magic of Chaining Methods ---');

const euroToUSD = 1.1;

//PIPELINE
const totalDepositsUSD = movements
  .filter(move => move > 0)
  .map((move, arr) => {
    console.log(arr);
    return move * euroToUSD;
  })
  // .map(move => move * euroToUSD)
  .reduce((acc, move) => acc + move, 0);

console.log(totalDepositsUSD);

/////////////////////////////////////////////////

console.log('--- The find Method ---');

//The find method also accepts a callback function which will be called as the method loops over the array. The find method will actually not return a new array but it will only return the first element that satisfies the condition
const found = movements.find(move => move < 0);

console.log(movements);
console.log(found);

// Data
/*const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];*/

console.log(accounts.find(acc => acc.owner === 'Jessica Davis'));

for (account of accounts) {
  const { owner } = account;
  if (owner === 'Jessica Davis') {
    console.log(account);
  }
}

/////////////////////////////////////////////////

console.log('--- some and every ---');

console.log(movements);

//EQUALITY
console.log(movements.includes(-130));

//Condition
//The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns true and false
console.log(movements.some(move => move === -130));

const anyDeposits = movements.some(move => move > 1500);

console.log(anyDeposits);

//The every method is similar to some method but the difference between them is that every only returns true if all of the elements in the array satisfy the condition
console.log(movements.every(move => move > 0));
console.log(account4.movements.every(move => move > 0));

//Separate callback
const deposit = move => move > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

/////////////////////////////////////////////////

console.log('--- flat and flatMap ---');

//The flat method returns a new array with all sub-array elements concatenated into it
const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrFlat.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();

console.log(allMovements);

const overallBalance = allMovements.reduce((acc, move) => acc + move, 0);

console.log(overallBalance);

const overallBalanceChain = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, move) => acc + move, 0);

console.log(overallBalanceChain);

//The flatMap method essentially combines a map and a flat method into just one method

const overallBalanceFlatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, move) => acc + move, 0);

console.log(overallBalanceFlatMap);

/////////////////////////////////////////////////

console.log('--- Sorting Array ---');

//Strings
const owners = ['Kenneth', 'Joy', 'Rhaylie', 'Holt'];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);

//Ascending
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1;

//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;

//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

/////////////////////////////////////////////////

console.log('--- Creating and Filling Arrays ---');

const arrNumber = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arrNumber.fill(16, 2, 6);
console.log(arrNumber);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from(
  { length: 100 },
  (_, i) => Math.trunc(Math.random() * 100) + 1
);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    element => Number(element.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];

  // console.log(movementsUI2.map(el => Number(el.textContent.replace('€', ''))));
});

/////////////////////////////////////////////////

console.log('--- Array Methods Practice ---');

// 1. Get the total sum of deposits in all accounts
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(move => move > 0)
  .reduce((acc, move) => acc + move, 0);

console.log(bankDepositSum);

// Using reduce
const bankDepositReduce = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, move) => {
    move > 0 ? (acc += move) : move;

    return acc;
  }, 0);

console.log(bankDepositReduce);

// 2. Count all the deposits greater than 1000
const numDepositsThousand = accounts
  .flatMap(acc => acc.movements)
  .filter(move => move >= 1000).length;
console.log(numDepositsThousand);

// Using reduce
const numDepositsReduce = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, current) => (current >= 1000 ? ++count : count), 0);

console.log(numDepositsReduce);

//The plus plus operator does actually increment the value but it still returns the previous value. So we can't use the count++ (postfix increment) inside the reduce method, use the (prefix increment) ++count

//Example of Postfix and Prefix Increment

let a = 10;
console.log(++a);
console.log(a);

// 3. Create an object which contains the sum of the deposits and withdrawals

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, current) => {
      // current > 0 ? (sums.deposits += current) : (sums.withdrawals += current);
      sums[current > 0 ? 'deposits' : 'withdrawals'] += current;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

// 4. Create a simple function to convert any string to title case

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const word = title
    .toLowerCase()
    .split(' ')
    .map(w => (exceptions.includes(w) ? w : capitalize(w)))
    .join(' ');

  return word;
};

console.log(convertTitleCase('this is a nice title'));

console.log(convertTitleCase('this is a LONG title but not too long'));

console.log(convertTitleCase('and here is another with an EXAMPLE'));
