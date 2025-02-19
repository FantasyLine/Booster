'use strict';

let ball = {
    x: 20,
    y: 20,
    color: 'blue',
    rayon: 10,
    dirY: 1,
    speedY: 1
}
let canvas={
    width : 0,
    height: 0,
    color: 'black',
}
let canvasDom = null
let ctx = null

document.addEventListener('DOMContentLoaded', function () {
    console.log(`Le dom est bon`)
    canvasDom = document.querySelector('#canvas')
    ctx = canvasDom.getContext('2d')
    
    canvas.width = canvasDom.width;
    canvas.height = canvasDom.height;
    ballMove()
    
})
// Ball
function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas

    ctx.fillStyle = canvas.color
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height); // Fond noir pour le canevas

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.rayon, 0, Math.PI * 2); // Dessine le cercle
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}
//Mouvement
function ballMove(){
    ball.y += ball.speedY

    if (ball.y + ball.rayon > canvas.height || ball.y - ball.rayon < 0) {
        ball.speedY = -ball.speedY;
    }
    drawBall()
    requestAnimationFrame(ballMove)
}
