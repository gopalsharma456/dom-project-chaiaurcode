const inputField = document.getElementById('input-field');

const outputField = document.getElementById('output-field');

const uppcaseBtn = document.getElementsByClassName('btn')[0];
const lowercaseBtn = document.getElementsByClassName('btn')[1];
const capitalizeBtn = document.getElementsByClassName('btn')[2];
const boldBtn = document.getElementsByClassName('btn')[3];
const italicBtn = document.getElementsByClassName('btn')[4];
const underlineBtn = document.getElementsByClassName('btn')[5];

uppcaseBtn.addEventListener('click', function () {
  const content = inputField.value;
  outputField.textContent = content.toUpperCase();
});

lowercaseBtn.addEventListener('click', function () {
  const content = inputField.value;
  outputField.textContent = content.toLowerCase();
});

capitalizeBtn.addEventListener('click', function () {
  const content = inputField.value;
  let firstCharacter = content[0];
  let restCharacters = content.substr(1, content.length);
  outputField.textContent =
    firstCharacter.toUpperCase() + restCharacters.toLowerCase();
});

boldBtn.addEventListener('click', function () {
  const content = inputField.value;
  outputField.innerHTML = `<strong>${content}</strong>`;
});

italicBtn.addEventListener('click', function () {
  const content = inputField.value;
  outputField.innerHTML = `<em>${content}</em>`;
});

underlineBtn.addEventListener('click', function () {
  const content = inputField.value;
  outputField.innerHTML = `<u>${content}</u>`;
});
