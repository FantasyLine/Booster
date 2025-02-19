'use strict';

let canvasDom = null;
let ctx = null;

document.addEventListener('DOMContentLoaded', function() {
    canvasDom = document.querySelector('#canvas');
    ctx = canvasDom.getContext('2d');
    
    rempli(100, 50, 'black', 0, 0);
    rempli(100, 50, 'green', 100, 200);
    pasRempli(100, 150, 'red', 300, 300);
});

function rempli(width, height, color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function pasRempli(width, height, color, x, y) {
    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, width, height);
}