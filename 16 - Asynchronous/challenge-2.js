'use strict';

//////////////////////////////////////////////////////

//Coding Challenge #2 - PART 1
let currentImg;
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      document.querySelector('.images').append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error(`Can't find the image provided!`));
    });
  });
};

//PART 2
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 2000);
  });
};

createImage('./img/img-1.jpg')
  .then(res => {
    currentImg = res;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(res => {
    currentImg = res;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .then(res => {
    currentImg = res;
    return wait(2);
  })
  .catch(error => console.error(error));
