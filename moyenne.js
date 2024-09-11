function calculMoyenne(notes, prenom) {
  let totalNote = 0;

  for (let note of notes) {
    totalNote += note;
  }

  const moyenne = totalNote / notes.length;

  console.log(prenom+', Votre moyenne est de : '+moyenne);

  // si moyenne > 15
  // console.log('Votre moyenne est de : '+moyenne+' vous avez les félicitation');

  // sinon si moyenne > 10 & moyenne <= 15 gère 11 à 15
  // console.log('Votre moyenne est de : '+moyenne+' vous avez les compliments');

  // sinon si  moyenne > 8 & moyenne <= 10 gère le 9 et 10
  // console.log('Votre moyenne est de : '+moyenne+' vous avez les encouragement');

  // sinon si  moyenne <= 8 inférieur ou égal à 8
  // sinon
  // console.log('Votre moyenne est de : '+moyenne+' vous avez encore du travail');

  if (moyenne > 15) {
    console.log('Vous avez les félicitation');
  } else if (moyenne > 10 && moyenne <= 15) {
    console.log('Vous avez les compliments');
  } else if (moyenne > 8 && moyenne <= 10) {
    console.log('Vous avez les encouragements');
  } else if (moyenne <= 8) {
    console.log('Vous avez encore du travail');
  }
}




const notesAnthony = [8, 9, 12, 10, 10];
const notesMarie = [17, 15, 18, 19, 20];
const notesStephane = [12, 13, 14, 15, 8];

calculMoyenne(notesAnthony, 'Anthony');

console.log('----')
console.log('----')
console.log('----')

calculMoyenne(notesMarie, 'Marie');

console.log('----')
console.log('----')
console.log('----')

calculMoyenne(notesStephane, 'Stephane');
