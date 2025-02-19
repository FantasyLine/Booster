'use strict'
// Objet contenant les infos sur la balle
let ball = {
    ballDom        : null,
    directionX    : 1,
    directionY    : 1,
    postX        : 100,
    postY        : 100,
    speed         : 4,
    animationId : null        
}
// Objet contenant les infos sur la taille de l'écran

const screenLimit = {
    right     : window.innerWidth,
    bottom     : window.innerHeight
}

document.addEventListener('DOMContentLoaded', () => {
    // Récupération de l'élément HTML de la balle
    ball.ballDom = document.getElementById('ball')

    document.addEventListener('click', () => {
        console.log('Ambre')

        if(ball.animationId === null) {

            ball.animationId = requestAnimationFrame(animateBall)
        } else {
            cancelAnimationFrame(ball.animationId)
            ball.animationId = null
        }
    })

})

function animateBall() {

    // on modifie la position de la balle en y ajoutant 1 ou soustrayant 1 selon la direction sur X et Y
    ball.postX += ball.speed * ball.directionX
    ball.postY += ball.speed * ball.directionY

    ball.ballDom.style.left = `${ball.postX}px`
    ball.ballDom.style.top = `${ball.postY}px`

    collision()

    ball.animationId = requestAnimationFrame(animateBall)
}

function collision() {
    // On vérifie si la balle est en collision avec le bord droit de l'écran
    // On multiplie par -1 la direction pour l'inverser !
    if (ball.postX >= screenLimit.right || ball.postX <= 0) {
        ball.directionX *= -1
    }
    if (ball.postY >= screenLimit.bottom || ball.postY <= 0) {
        ball.directionY *= -1
    }
}




////// creer une classe personnage avec 4 propriete, HP MANA FORCE SPEED