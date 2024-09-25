const form = document.getElementById('form');
const selectElement = document.getElementById('mySelect');
const firstname = form.querySelector('#firstname');
const misterCheckbox = form.querySelector('#mister');

function clearFormValidation(form) {
  form.querySelectorAll('.error').forEach(element => {
    element.innerHTML = '';
  });

  form.querySelectorAll('input.success').forEach(element => {
    element.classList.remove('success');
  });
}

function clearElementValidation(element) {
  const errorDiv = element.parentNode.querySelector('.error');

  if (errorDiv) {
    errorDiv.innerHTML = '';
  }
}

function writeFormErrorMessage(element, message) {
  const errorDiv = element.parentElement.querySelector('.error');
  errorDiv.innerHTML = message;
}

function validateFormElement(element) {
  if ('submit' === element.type) {
    return true;
  }

  element.classList.remove('success');

  if ('text' === element.type && element.min && element.value.length < element.min) {
    writeFormErrorMessage(element, 'Le contenu du champs doit faire au minimum ' + element.min + ' caractères');

    return false;
  }

  if ('number' === element.type && element.dataset.min && element.value < element.dataset.min) {
    writeFormErrorMessage(element, 'Le nombre doit être supérieur à ' + element.dataset.min);

    return false;
  }

  element.classList.add('success');

  return true;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  let errors = false;

  clearFormValidation(event.currentTarget);

  for (let element of form.elements) {
    if (validateFormElement(element) === false) {
      errors = true;
    }
  }

  if (errors === false) {
    event.currentTarget.submit();
  }
});


form.querySelectorAll('input[type=text]').forEach((element) => {
  element.addEventListener('keyup', event => {
    if (validateFormElement(event.currentTarget) === true) {
      clearElementValidation(event.currentTarget);
    }
  });
});




firstname.addEventListener('mouseover', event => {
  const tooltip = event.currentTarget.parentNode.querySelector('.tooltip');
  tooltip.classList.add('visible');
});

firstname.addEventListener('mouseout', event => {
  const tooltip = event.currentTarget.parentNode.querySelector('.tooltip');
  tooltip.classList.remove('visible');
});



selectElement.addEventListener('change', function(event) {
  const selectedValue = event.currentTarget.value;
  console.log(`Vous avez sélectionné : ${selectedValue}`);
});



selectElement.addEventListener('change', function(event) {
  const selectedValue = event.currentTarget.value;
  console.log(`Vous avez sélectionné : ${selectedValue}`);
});


misterCheckbox.addEventListener('change', function(event) {
  const isChecked = event.currentTarget.checked;
  console.log(`Vous avez sélectionné : ${isChecked}`);
});
