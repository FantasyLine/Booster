/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

let divA = document.querySelector('.container');
let modal = document.querySelector('.modal');
let moveDiv = document.querySelector('#moveDiv');
let hide = document.querySelector('#hideModal');
let step = 0;

moveDiv.addEventListener("click", move)
hide.addEventListener("click",hideModal)

function move(){
    step++;
    switch(step){//mettre des margin a la place des translate
        case 1:
            hideModal()
            divA.style.transform = 'translate(200px,0)';
            break;
        case 2:
            divA.style.transform = 'translate(200px, 200px)';
            break;
        case 3:
            divA.style.transform = 'translate(300px,200px)';
            break;
        case 4:
            divA.style.transform = 'translate(0, 0)';
            showModal();
            step = 0;
            break;
    }
}
function showModal() {
    modal.classList.add("active");
}
function hideModal() {
    modal.classList.remove("active");
}


// let element = document.querySelector('body');

// element.addEventListener('keydown', function(e) {
//   console.log('Une touche a été enfoncée!');
// });

// element.addEventListener('keyup', function(e) {
//   console.log('Une touche a été relâchée!');
// });

// element.addEventListener('keypress', function(e) {
//   console.log('Une touche est enfoncée et maintenue!');
// });