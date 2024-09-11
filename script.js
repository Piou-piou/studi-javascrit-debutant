const notes = [10, 15, 20, 8];

const fruits = ['banane', 'fraise', 'pomme'];

// console.log(notes);
// console.log(notes.length);
// console.log(fruits);
// console.log(fruits.length);

// de 0 à 3
for (let i = 0 ; i < fruits.length ; i++) {
  console.log('Je mange le fruit : '+fruits[i]+' !');
}

console.log('----')
console.log('----')
console.log('----')

for (let fruit of fruits) {
  if (fruit == 'fraise') {
    continue;
  }

  console.log('Je mange le fruit : '+fruit+' !');
}

console.log('----')
console.log('----')
console.log('----')

fruits.forEach((fruit) => {
  console.log('Je mange le fruit : '+fruit+' !');
});



const formGroups = document.querySelectorAll('body > main > form > .form-group');

Array.from(formGroups).forEach((element) => {
  element.remove()
})
