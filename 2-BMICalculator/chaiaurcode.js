const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = `${height} please input valid height`;
  }
  if (weight < 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = `${weight} please input valid weight`;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.6) {
    results.innerHTML = `<span>${bmi} Under Weight</span>`;
  }
  if (bmi < 24.9 && bmi > 18.6) {
    results.innerHTML = `<span>${bmi} Normal Weight</span>`;
  }
  if (bmi > 24.9) {
    results.innerHTML = `<span>${bmi} Over Weight</span>`;
  }
});
