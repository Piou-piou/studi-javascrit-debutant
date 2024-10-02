const formValidator = new FormValidator(document.getElementById('form'));

formValidator.getForm().addEventListener('submit', event => {
  event.preventDefault();

  if (formValidator.validate()) {
    event.currentTarget.submit();
  }
});

formValidator.getForm().querySelectorAll('input').forEach((element) => {
  element.addEventListener('keyup', event => {
    formValidator.validateElement(event.currentTarget);
  });

  element.addEventListener('mouseover', event => {
    FormHelper.displayTooltip(event.currentTarget);
  });


  element.addEventListener('mouseout', event => {
     FormHelper.hideTooltip(event.currentTarget);
  });
});


/*
const selectElement = document.getElementById('mySelect');
const firstname = form.querySelector('#firstname');
const misterCheckbox = form.querySelector('#mister');


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
*/
