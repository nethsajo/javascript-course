'use strict';

//////////////////////////////////////////////////////
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 2000);
  });
};

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

//Coding Challenge #3 - PART 1
// const loadNPause = async function () {
//   try {
//     //Image 1
//     const imgOne = await createImage('./img/img-1.jpg');
//     await wait(2);
//     imgOne.style.display = 'none';

//     //Image 2
//     const imgTwo = await createImage('./img/img-2.jpg');
//     await wait(2);
//     imgTwo.style.display = 'none';

//     //Image 3
//     const imgThree = await createImage('./img/img-3.jpg');
//     await wait(2);
//     imgThree.style.display = 'none';
//   } catch (error) {
//     console.error(error);
//   }
// };

// loadNPause();

//Coding Challenge #3 - PART 2
const loadAll = async function (imgArr) {
  try {
    //Keep in mind createImage will return a promise so the callback function of map method needs to be special (add async), need to consume the comes from the createImage
    const imgs = imgArr.map(img => createImage(img));
    const img = await Promise.all(imgs);
    console.log(img); //[img, img, img]
    //Loop the array and add class parallel
    img.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);
