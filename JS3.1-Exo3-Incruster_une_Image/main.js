'use strict';


document.addEventListener('DOMContentLoaded', function () {
    // L'objet du DOM Canvas
    let canvasDom = document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    let ctx = canvasDom.getContext('2d');
    
    // On créer un nouvel Objet du DOM avec JS.
    let myimg = new Image();

    myimg.src = 'https://picsum.photos/200/300';

myimg.onload = function () {
    //On place l'image
    ctx.drawImage(myimg, 10, 10);
};

});