'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  //Get access to the event and call the preventDefault method to prevent the default behavior
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  const sOneCoordinates = sectionOne.getBoundingClientRect();

  console.log(sOneCoordinates);

  // console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(
  //   sOneCoordinates.left + window.pageXOffset,
  //   sOneCoordinates.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: sOneCoordinates.left + window.pageXOffset,
  //   top: sOneCoordinates.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page Navigation

//Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   })
// );

///////////////////////////////////////
// Tabbed Component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  //An if statement which will return early if some condition is matched. In this case, when there's nothing clicked then we want to immediately finish the function
  if (!clicked) return;

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  //Remove active classes
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
// Menu fade Animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== link) {
        element.style.opacity = this;
      }
    });

    logo.style.opacity = this;
  }
};

//Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky Navigation

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
// Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  //Guard clause

  //If false then the function will not return and simply the rest of the code is gonna be executed
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Lazy loading images
const imageTargets = document.querySelectorAll('img[data-src]');
// console.log(imageTargets);

const loadImage = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observe.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imageTargets.forEach(function (image) {
  imageObserver.observe(image);
});

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  let maxSlide = slides.length - 1;

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      const dots = `<button class="dots__dot" data-slide="${i}"></button>`;

      dotContainer.insertAdjacentHTML('beforeend', dots);
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(d => d.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    //To make the slide work, take the index and subtract it from the currentSlide
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
      console.log(currentSlide);
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  //Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && previousSlide();

    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
