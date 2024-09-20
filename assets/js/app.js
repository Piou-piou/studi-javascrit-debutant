const form = document.getElementById('form');

function clearFormValidation(form) {
  form.querySelectorAll('.error').forEach(element => {
    element.innerHTML = '';
  });

  form.querySelectorAll('input.success').forEach(element => {
    element.classList.remove('success');
  });
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
    writeFormErrorMessage(element, 'Le contenu du champs doit faire au minimum '+element.min+' caractères');

    return false;
  }

  if ('number' === element.type && element.dataset.min && element.value < element.dataset.min) {
    writeFormErrorMessage(element, 'Le nombre doit être supérieur à '+element.dataset.min);

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
