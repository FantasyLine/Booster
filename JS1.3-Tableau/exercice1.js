/**
 * Déclarer une variable « colors » contenant les valeurs "Rouge" et "Bleu".
 * Afficher "Bleu" dans la console. En utilisant le tableau, hein !

let colors = ['Bleu','Rouge'];

console.log(colors[0]);

// tableau 3dim et numero dansla 3e dim
let tel = [
    [
        [
            1, '0679103048'
        ]
    ]
];
console.log(tel[0][0][1])
 */



/**C'est votre anniversaire, vous souhaitez créer un petit programme pour vous aider à gérer la liste de vos invités. Pour placer vos invités lors de cette grande fête, 
 * vous allez imprimer leurs prénoms sur de petits cartons. Selon le nombre de caractères du prénom, il vous faudra alors des tailles différentes:

jusqu'à 6 lettres, ce sont des petits cartons
de 6 à 8 lettres, ce sont des cartons de taille moyenne
plus de 8 lettres, ce sont des cartons de grande taille
En JavaScript, créez un tableau qui contiendra la liste des prénoms de vos invités.

Puis à l'aide d'une boucle for, parcourez ce tableau et afficher la liste des invités sous forme de liste à puce avec à chaque fois le prénom puis le format du carton nécessaire.
- Valentin MOYEN
- Laura PETIT

Bonus Afficher sous cette liste le nombre de petits cartons, le nombre de moyens et le nombre de grands cartons nécessaires.*/

let invite = ['Corentin', 'Laura', 'Johan', 'Bastien', 'Maximilien'];
let petit = 0
let moyen = 0
let grand = 0
for(const prenom of invite){
    if( prenom.length < 6){
        document.write(`- ${prenom} PETIT <br>`);
        petit++ ;
    } else if(prenom.length <= 8){
        document.write(`- ${prenom} MOYEN <br>`)
        moyen ++;
    }
    else{
        document.write(`- ${prenom} GRAND <br>`)
        grand ++;
    }
}

// for(i=0; i<invite.length; i++){
//     let prenom = invite[i]
//     if( prenom.length < 6){
//         document.write(`- ${prenom} PETIT <br>`);
//         petit++ ;
//     } else if(prenom.length <= 8){
//         document.write(`- ${prenom} MOYEN <br>`)
//         moyen ++;
//     }
//     else{
//         document.write(`- ${prenom} GRAND <br>`)
//         grand ++;
//     }
// }
document.write(`Il y a ${petit} petit(s) carton(s) <br>`)
document.write(`Il y a ${moyen} moyen(s) carton(s) <br>`)
document.write(`Il y a ${grand} grand(s) carton(s) <br>`)
