class FormValidator {
  constructor(form) {
    this.form = form;
  }

  getForm() {
    return this.form;
  }

  validate() {
    let errors = false;

    this.clearFormValidation();

    for (let element of this.form.elements) {
      if (this.validateElement(element) === false) {
        errors = true;
      }
    }

    return errors === false;
  }

  validateElement(element) {
    if ('submit' === element.type) {
      return true;
    }

    element.classList.remove('success');

    if ('text' === element.type && element.min && element.value.length < element.min) {
      this.writeFormErrorMessage(element, 'Le contenu du champs doit faire au minimum ' + element.min + ' caractères');

      return false;
    }

    if ('number' === element.type && element.dataset.min && element.value < element.dataset.min) {
      this.writeFormErrorMessage(element, 'Le nombre doit être supérieur à ' + element.dataset.min);

      return false;
    }

    element.classList.add('success');
    this.clearElementValidation(element);

    return true;
  }

  clearFormValidation() {
    this.form.querySelectorAll('.error').forEach(element => {
      element.innerHTML = '';
    });

    this.form.querySelectorAll('input.success').forEach(element => {
      element.classList.remove('success');
    });
  }

  clearElementValidation(element) {
  const errorDiv = element.parentNode.querySelector('.error');

  if (errorDiv) {
    errorDiv.innerHTML = '';
  }
}

  writeFormErrorMessage(element, message) {
    const errorDiv = element.parentElement.querySelector('.error');
    errorDiv.innerHTML = message;
  }
}