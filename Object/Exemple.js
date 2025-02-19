let voiture = {
    marque: 'Toyota',
    modele: 'Corolla',
    annee: 2005,
    proprietaire: {
        nom: ['jean', 'Bassam'],
        age: 30
    }
};

for (const [keys, values] of  Object.entries(voiture) ) {
    document.write(keys + ' : ' + values + '<br>')
    if(typeof values === 'object') {

        for (const [key, value] of  Object.entries(values)) {
            
            document.write(key + ' : ' + value + '<br>') 
        }
    }
}

// for (const [key, value] of  Object.entries(voiture) ) {
//         console.log(key + ' : ' + value)
// }

// console.log('=============VALUE===============')

// for (const value of  Object.values(voiture) ) {
//         console.log( value)
// }

// console.log('============== KEY==============')

// for (const key of  Object.keys(voiture) ) {
//         console.log(key)
//         console.log('============== KEY / value==============')
//         console.log(voiture[key]); // Affiche la valeur associée à la clé
// }