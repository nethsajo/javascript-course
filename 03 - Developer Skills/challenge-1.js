const tempOne = [17, 21, 23];
const tempTwo = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  //This will hold the currentIndex
  let currentIndex = 0;

  //Transforming  array into string
  let str = '';
  for (i = 0; i < arr.length; i++) {
    //Increment the currentIndex
    currentIndex += 1;

    //Transform each element to string with celcius
    str += `${arr[i]}°C in ${currentIndex} days... `;
  }

  console.log(`...${str}`);
};

printForecast(tempOne);
