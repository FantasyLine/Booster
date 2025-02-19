'use strict';

// On définit les propriétés de notre cercle dans un objet
let circle = {
    color: "#FF0000",
    radius: 10, // Rayon du cercle
    x: 20,      // Position x du centre
    y: 20       // Position y du centre
};

let canvasDom;
let ctx;

// Dès que le DOM est chargé, on commence
document.addEventListener('DOMContentLoaded', function () {
    canvasDom = document.querySelector('#canvas');
    ctx = canvasDom.getContext('2d');

    displayCircle();
    document.addEventListener('keydown', moveCircle);
});

function displayCircle() {
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height); // Efface le canevas
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height); // Fond noir pour le canevas
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2); // Dessine le cercle
    ctx.fillStyle = circle.color;
    ctx.fill();
}

function moveCircle(e) {
    switch (e.key) {
        case 'ArrowRight':
            if (circle.x + circle.radius < canvasDom.width) circle.x++; // Déplacement à droite
            break;
        case 'ArrowLeft':
            if (circle.x - circle.radius > 0) circle.x--; // Déplacement à gauche
            break;
        case 'ArrowUp':
            if (circle.y - circle.radius > 0) circle.y--; // Déplacement vers le haut
            break;
        case 'ArrowDown':
            if (circle.y + circle.radius < canvasDom.height) circle.y++; // Déplacement vers le bas
            break;
    }
    displayCircle(); // Redessine le cercle après chaque mouvement
}