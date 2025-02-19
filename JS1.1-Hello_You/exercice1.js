/**
 * Créer ici le projet « Hello You ».
 */
const fName = prompt('Votre prenom');
console.log(`Salut ${fName}!`);
//
const lName = prompt('Votre nom');
const age = Number(prompt('Votre age'));
console.log(`Salut ${fName} ${lName}, cette annee tu as ${age} ans !`);
//
const currentYear = 2024;
console.log(currentYear);
//
const date = new Date;
const year = date.getFullYear();
console.log(year)
//
const monthBirth = Number(prompt('Votre mois de naissance en nombre'));
const dayBirth = Number(prompt('Votre jour de naissance'));
const yearBirth = Number(prompt('Votre annee de naissance'));
let monthDate = date.getMonth() + 1;
let dayDate = date.getDate();
console.log(Math.floor(dayDate - dayBirth)/100)
console.log(Math.floor(monthDate - monthBirth)/100)

console.log(`Salut ${fName} ${lName}, cette annee tu as ${age3} ans !`);
/*
console.log(monthDate)
console.log(monthBirth)
console.log(dayDate)
if(monthBirth>=monthDate){
    if(day>dayDate){
        let age2 = age + 1
        console.log(`Salut ${fName} ${lName}, cette annee tu as ${age2} ans !`);
    }
    else{
        let age2 = age + 1
        console.log(`Salut ${fName} ${lName}, cette annee tu as ${age2} ans !`);
    }
}else{
    console.log(`Salut ${fName} ${lName}, cette annee tu as ${age} ans !`);
}*/
