'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let i = 10;
let compte = document.querySelector('span'); 
compte.innerText=('10');
/////
let fire = document.querySelector('#firing-button');
/////
let rocket = document.querySelector('#rocket')
/////
let cancel = document.querySelector('#cancel-button');
let reset = document.querySelector('#reset');
let interval;


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/



function compteARebourd() {
    console.log(i);
    interval = setInterval(function () {
        if (i > 0) {
            i--;
            compte.innerText = `${i}`;
            rocket.src = './images/rocket2.gif'
        } else{
            rocket.src = './images/rocket3.gif'
            rocket.classList.add('tookOff')
            cancel.classList.add('disabled')
        }
    }, 1000);
}
function etoiles(){

    
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
fire.addEventListener('click', () => {
    compteARebourd();
    fire.classList.add('disabled')
    cancel.addEventListener('click', () =>{
        clearInterval(interval)
    })
});

reset.addEventListener('click', () => {
    clearInterval(interval)
    i=10
    compte.innerText = `${i}`;
    fire.classList.remove('disabled')
    rocket.src = './images/rocket1.png'
    })
