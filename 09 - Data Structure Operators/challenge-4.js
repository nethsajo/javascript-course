'use strict';

document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));

const btnConvert = document.querySelector('button');

btnConvert.textContent = 'Go';

btnConvert.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rowText = text.split('\n');

  console.log(rowText);

  for (const [i, row] of rowText.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const camelCase = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${camelCase.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
