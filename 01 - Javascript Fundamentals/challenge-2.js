const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;

let johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is higher than John's BMI`);
} else {
  console.log(`John's BMI is higher than Mark's BMI`);
}

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI} is higher than Mark's BMI (${markBMI})`);
}
