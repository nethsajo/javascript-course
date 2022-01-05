'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', () => (header.style.color = 'blue'));
})();
