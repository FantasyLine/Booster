'use strict';


// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded',function(){
    let canvasDom = document.querySelector('#canvas')
    let ctx = canvasDom.getContext('2d');

    ctx.font = 'bold 18px Verdana';
    ctx.fillStyle = 'blue';
    ctx.fillText('Hello', 10, 50);
    
    
    ctx.fillStyle = 'red';
    ctx.fillText('world', 10 +ctx.measureText('Hello').width+ 10, 50);

    ctx.fillStyle = 'purple';
    ctx.fillText('!', 10 +ctx.measureText('Hello').width + ctx.measureText('world').width+20, 50);
});