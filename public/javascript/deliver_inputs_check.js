let numbers = /^(\d+([\.,]\d{1,2})?)?$/;

let speedy_input = document.getElementById('speedy_price');
let econt_input = document.getElementById('econt_price')

let speedyError = document.getElementById('speedyError');
let econtError = document.getElementById('econtError');

let speedyButton = document.getElementById('updateSpeedy');
let econtButton = document.getElementById('updateEcont');


econtButton.addEventListener('click', function (k) {

  let valid = true;

  k.preventDefault();

  if (econt_input.value.trim() === '') {

    econtError.innerHTML = 'Полето е задължително';

    setTimeout(function () {
      econtError.innerHTML = '';

    }, 5000)

    valid = false;

  } else if (!econt_input.value.match(numbers)) {

    econtError.innerHTML = 'В полето са разрешени само цифри';

    setTimeout(function () {
      econtError.innerHTML = '';

    }, 5000)

    valid = false;

    return;

  }

  if (valid) {
    document.querySelector('.econtForm').submit();
  }

});


speedyButton.addEventListener('click', function (e) {

  let valid = true;

  e.preventDefault();

  if (speedy_input.value.trim() === '') {

    speedyError.innerHTML = 'Полето е задължително';

    setTimeout(function () {
      speedyError.innerHTML = '';

    }, 5000)

    valid = false;

  } else if (!speedy_input.value.match(numbers)) {

    speedyError.innerHTML = 'В полето са разрешени само цифри';

    setTimeout(function () {
      speedyError.innerHTML = '';

    }, 5000)

    valid = false;

    return;

  }

  if (valid) {
    document.querySelector('.speedyForm').submit();
  }

});








