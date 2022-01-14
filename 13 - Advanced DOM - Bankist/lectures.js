///////////////////////////////////////
// How the DOM really works

//DOM - is basically the interface between all JavaScript code and the browser, or more specifically HTML documents that are rendered in and by the browser

//It allows us to make JavaScript interact with browser

//We can write JavScript to create, modify and delete HTML elements; set styles, classes, and attributes; and listen and respond to events;

//DOM tree is generated from an HTML document, which we can then interact with

//DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree

//The node type has a couple of child types: Element type, Text type, Comment type, Document type

//Inheritance means that all the child types will also get access to the methods and properties of all their parent node types

//EventTarget is a parent of both the node type and also the window node type

////////////////////////////////////////////////////

console.log('--- Selecting, Creating, and Deleting elemetns');

// Selecting, Creating, and Deleting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//Selecting

//Select one element
const header = document.querySelector('.header');

//Selects all element with a class of section
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//Selecting element using getElementById
document.getElementById('section--1');

//Selecting all element with button tag
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
// .insertAdjacentHTML

//Creating a div element
const message = document.createElement('div');
//Adding class to the message div
message.classList.add('cookie-message');

//Inserts only text
// message.textContent =
//   'We use cookies for improved functionality and analytics.';

//Inserts text, html tags
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//Prepend - inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

//Prepend basically adds the element as the first child of this element (header)
// header.prepend(message);

//Append basically adds the element as the last child of this element (header)
// header.append(message);

//cloneNode - returns a copy of node. If deep is true, the copy also includes the node's descendants.
// header.append(message.cloneNode(true));

//before - inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.
header.before(message);

//after - Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.
// header.after(message);

//Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //Remove the element message
    // message.remove();

    //remove method is actually very recent, before this method existed was to remove child elements. Select the parent element first and then remove the child from there

    //The parentElement of message node is the header. The header has a child node of message element. So when the btn--close-cookie click, the element message will be remove inside the header node
    message.parentElement.removeChild(message);
  });

////////////////////////////////////////////////////

console.log('--- Styles, Attributes and Classes ---');

//Setting a style on an element
message.style.backgroundColor = '#37383d';
message.style.width = '100%';

//Return ''
console.log(message.style.backgroundColor);

//Get the computed style height of an element
console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseInt(getComputedStyle(message).height, 10) + 40 + 'px';

//Changing the color of variable primary inside of root block
// document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');

console.log(logo.alt); //Bankist Logo
console.log(logo.className); //nav__logo

logo.alt = 'Beautiful minamalist logo';

//Non-standard - not working
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //returns the abosolute url
console.log(logo.getAttribute('src')); //returns the relative url

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

//Don't use this because this will override all the existing classes
// logo.className = 'kenneth';

////////////////////////////////////////////////////

console.log('--- Types of Events and Event Handlers ---');

const h1 = document.querySelector('h1');

console.log(h1.textContent);

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

////////////////////////////////////////////////////

console.log('--- Event Propagation: Bubbling and Capturing ---');

//Capturing Phase where the event travels all the way down from the document root to the target element

//Target Phase where the event reached the target element.

//Bubble Phase where the event bubbles up from the target to the document root.

//rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   //e.target - The target is essentially where the event originated or where the click happened
//   console.log('LINK', e.target, e.currentTarget);

//   //The e.currentTarger is exactly the same as the 'this' keyword. The 'this' keyword is also the one pointing to the element on which the EventListener is attached to
//   console.log(e.currentTarget === this);

//   //Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

////////////////////////////////////////////////////

console.log('--- DOM Travesing ---');

const heading = document.querySelector('h1');

//Going downwards: child
console.log(heading.querySelectorAll('.highlight'));
console.log(heading.childNodes);

//.children - returns the child elements.
console.log(heading.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards
console.log(heading.parentNode);
console.log(heading.parentElement);

heading.closest('.header').style.background = 'var(--gradient-secondary)';

heading.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways: siblings
console.log(heading.previousElementSibling);
console.log(heading.nextElementSibling);

console.log(heading.previousSibling);
console.log(heading.nextSibling);

console.log(heading.parentElement.children);

[...heading.parentElement.children].forEach(function (el) {
  if (el !== heading) el.style.transform = 'scale(0.5)';
});

////////////////////////////////////////////////////

console.log('---Implementing a Sticky Navigation: The Scroll Event ---');

// const initialCoords = sectionOne.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

////////////////////////////////////////////////////

console.log('--- A Better Way: The Intersection Oberserver API ---');

const observerCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const observerOptions = {
  root: null, //The root property is the element that the target is intersecting. sectionOne is the target and the root element will be the element that want our target element to intersect
  threshold: [0, 0.2], //This is basically the percentage of intersection at which the observer callback will be called
};

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(sectionOne);

////////////////////////////////////////////////////

console.log('--- Building a Slider ---');

// First slide - 0% , Second slide - 100%, Third slide - 200%, Last slide - 300%

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

//1st Slide: 100 * (0 - 0) = 0%
//After click next: 100 * (0 - 1) = -100%
//After click next on 2nd slide: -200%
//After click next on 3rd slide: -300%

//2nd Slide: 100 * (1 - 1) = 0%
//After click next: 100 * (1 - 2) = -100%
//After click next on 3rd slide: -200%

//3rd Slide: 100 * (2 - 2) = 0%
//After click next: 100 * (2 - 3) = -100%

//4th Slide: 100 * (3 - 3) = 0%
//After click next: 100 * (3 - 0) = 300%

////////////////////////////////////////////////////

console.log('--- Lifecycle DOM Events ---');

//DOMContentLoaded event is fired by the document as soon as the HTML is completely parsed which means that the HTML has been downloaded and been converted to the DOM tree. Aslo, all scripts must be downloaded and executed before the DOM content loaded event can happen

//Does that mean that we should wrap our entire code into an event listener like this below? Actually, no we don't need to do that and that's because we have a script tag which is the one that imports or a JavaScript into the HTML at the end of the body.

//So basically it's the last thing that is going to be read in the HTML and the browser will only find the script when the rest of the HTML is already parsed anyway

//When we have the script tag at the end of the HTML then we do not need to listen for the DOM content loaded event

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

//The load event is fired by the window. As soon as not only the HTML is parsed but also all the images and external resources like CSS files are also loaded

//So basically when the complete page has finished loading is when the event gets fired
window.addEventListener('load', function (e) {
  console.log('Page fully loaded!', e);
});

//The before unload event which also gets fired on window
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});

////////////////////////////////////////////////////

console.log('--- Efficient Script Loading: defer and async ---');

//End of Body - scripts are fetched and executed after the HTML is completely parsed

//Async in Head - scripts are fetched asychronously and executed immediately

//Defer in Head - scripts are fetched asychronously and executed after the HTML is completely parsed
