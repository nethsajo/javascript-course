// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcAge = birthYear => 2022 - birthYear;

// console.log(calcAge(1998));

//PROBLEM 1
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//Let's assume that the first element of the array is the maximum, its because we do not loop the array yet at this point
//First Element
// let max = temps[0];
// let min = temps[0];

// for (let i = 0; i < temps.length; i++) {
//   if (typeof temps[i] !== 'number') continue;

//First Element of array is 3, so 3 is greater than 3?
// if (temps[i] > max) {
//   max = temps[i];
// }

//First Element of array is 3, so 3 is less than 3?
//   if (temps[i] < min) {
//     min = temps[i];
//   }
// }

//   console.log(`Maximum Value: ${max}, Minimum Value: ${min}`);

//   return `Amplitude: ${max - min}`;
// };

// console.log(calcTempAmplitude(temperatures));

//PROBLEM 2

//const calcTempAmplitudeNew = function (t1, t2) {
//Merging two arrays
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;

//     if (temps[i] > max) {
//       max = temps[i];
//     }

//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }

//   console.log(`Maximum Value: ${max}, Minimum Value: ${min}`);

//   return `Amplitude: ${max - min}`;
// };

// console.log(calcTempAmplitudeNew(temperatures, [3, 5, 20]));

//Debugging with Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C. FIX
    // value: Number(prompt('Degree celsius: ')),
    value: 10,
  };

  // B. FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A. IDENTIFY
console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  //Merging two arrays
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    // debugger;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  console.log(`Maximum Value: ${max}, Minimum Value: ${min}`);

  return `Amplitude: ${max - min}`;
};

//A. IDENTIFY
console.log(calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]));
