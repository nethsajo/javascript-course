//TEST DATA 1
// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

//TEST DATA 2
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;

let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
