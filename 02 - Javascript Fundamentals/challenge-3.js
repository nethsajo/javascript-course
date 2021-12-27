const markInfo = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calculateBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnInfo = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calculateBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (markInfo.calculateBMI() > johnInfo.calculateBMI()) {
  console.log(`${markInfo.fullName}'s BMI (${markInfo.bmi}) is higher than ${johnInfo.fullName}'s BMI (${johnInfo.bmi})!`);
} else if (johnInfo.calculateBMI() > markInfo.calculateBMI()) {
  console.log(`${johnInfo.fullName}'s BMI (${johnInfo.bmi}) is higher than ${markInfo.fullName}'s BMI (${markInfo.bmi})!`);
}
