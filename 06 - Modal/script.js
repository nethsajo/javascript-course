'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i].textContent);

  //Adding event to the buttons and call the openModal function
  btnsShowModal[i].addEventListener('click', openModal);
}

//Adding event to the close button and call the closeModal function
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//Adding keypress event
//Add parameter to the function to figure out which key was pressed

//So then as the event occurs, JS will call this function with the event object as an argument

//This works because we do not call this function here or selves, only define it.

//Call function when a key down event happens
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  //If the user clicks the escape key and then check if modal contains the hidden class
  if (e.key === 'Escape') {
    // console.log(`Escape was pressed`);

    //If the modal does not contain the hidden class the close the modal
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
