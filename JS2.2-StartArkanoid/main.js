'use strict';
/// variable
let ball = {
    x: null,
    y: null,
    color: 'blue',
    rayon: 10,
    speedY: 0,
    speedX: 0,
    animationId: null
};

let canvas = {
    width: 0,
    height: 0,
    color: 'black',
};

let paddle = {
    x: 0,
    y: 0,
    speed: 8,
    color: 'red',
    width: 140,
    height: 4,
};

let game = {
    start: false,
    pause: false,
    gameOver: false
};

let canvasDom = null;
let ctx = null;
/////////////////

document.addEventListener('DOMContentLoaded', function () {
    canvasDom = document.querySelector('#canvas');
    ctx = canvasDom.getContext('2d');
    canvas.width = canvasDom.width;
    canvas.height = canvasDom.height;
    
    initBricks();
    initPosition();  
    drawBall();      
    drawPaddle();    

    document.addEventListener('keydown', keyPress);  
    document.addEventListener('keyup', pause);
});
let bricks = [];

// Dessine la balle
function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = canvas.color;
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.rayon, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

// Dessine le paddle
function drawPaddle() {
    ctx.fillStyle = paddle.color;
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// Mouvement de la balle
function ballMove() {
    if (game.gameOver) return;
    ////Mouvement
    ball.y += ball.speedY;
    ball.x += ball.speedX;

    ///Gameover bas, rebond haut
    if (ball.y - ball.rayon < 0) {
        ball.speedY = -ball.speedY;
    } else if (ball.y + ball.rayon > canvas.height) {
        ball.speedY = 0;
        ball.speedX = 0;
        game.gameOver = true;
        displayGameOver();
        return;
    }

    // Rebond mur
    if (ball.x + ball.rayon > canvas.width) {
        ball.x = canvas.width - ball.rayon;
        ball.speedX = -ball.speedX;
    } else if (ball.x - ball.rayon < 0) {
        ball.x = ball.rayon;
        ball.speedX = -ball.speedX;
    }

    // rebond paddle
    if (
        ball.y + ball.rayon >= paddle.y &&
        ball.y <= paddle.y + paddle.height &&
        ball.x >= paddle.x &&
        ball.x <= paddle.x + paddle.width
    ) {
        ball.speedY = -ball.speedY;

        let hitPosition = (ball.x - paddle.x) / paddle.width;

        if (hitPosition < 0.33) {
            ball.speedX = -2; 
        } else if (hitPosition < 0.66) {
            ball.speedX = 0.3;
        } else {
            ball.speedX = 2; 
        }
    }

    /// cassage brique
    for (let c = 0; c < bricks.length; c++) {
        for (let r = 0; r < bricks[c].length; r++) {
            let brick = bricks[c][r];
            if (ball.x + ball.rayon > brick.x && ball.x - ball.rayon < brick.x + 70 && ball.y + ball.rayon > brick.y && ball.y - ball.rayon < brick.y + 20) {
                ball.speedY = -ball.speedY;
                bricks[c].splice(r, 1);
                drawBricks();
            }
        }
    }

    if (bricks.every(column => column.length === 0)) {
        ball.speedX = 0;
        ball.speedY = 0;
        game.gameOver = true;
        game.gameWin = true;
    }

    drawBall();
    drawPaddle();
    drawBricks();
    ball.animationId = requestAnimationFrame(ballMove);
}


///// Position paddle balll
function initPosition() {
    paddle.x = (canvas.width - paddle.width) / 2;
    paddle.y = canvas.height - 50;
    ball.x = paddle.x + paddle.width / 2;
    ball.y = paddle.y - ball.rayon;
}
//////////

// Move paddle
function keyPress(event) {
    if (event.key === 'ArrowLeft') {
        paddle.x -= paddle.speed;
        if (paddle.x < 0) {
            paddle.x = 0;
        }
    }
    if (event.key === 'ArrowRight') {
        paddle.x += paddle.speed;
        if (paddle.x + paddle.width > canvas.width) {
            paddle.x = canvas.width - paddle.width;
        }
    }
    if (!game.start) {
        ball.x = paddle.x + paddle.width / 2;
    }
    drawBall();
    drawPaddle();
    drawBricks();
}
////////////

// Démarrage / Pause
function pause(e) {
    if (e.key === ' ') {
        if (game.gameOver) {
            game.gameOver = false;
            game.start = false;
            initPosition();
            drawBall();
            drawPaddle();
            drawBricks();
        } else if (!game.start) {
            game.start = true;
            ball.speedY = -2;
            ball.speedX = -2;
            ball.animationId = requestAnimationFrame(ballMove);
            initBricks()
        } else {
            game.pause = !game.pause;
            if (game.pause) {
                cancelAnimationFrame(ball.animationId);
                document.removeEventListener('keydown', keyPress);
            } else {
                ball.animationId = requestAnimationFrame(ballMove);
                document.addEventListener('keydown', keyPress);
            }
        }
    }
}
///////////////////

// Affichage Game Over
function displayGameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '24px Arial bold';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
}
///////

// Affichage Victoire
function displayGameWin() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '24px Arial bold';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('You Win!', canvas.width / 2, canvas.height / 2);  // Le message de victoire
}
/// Les briques
let brick = {
    rowCount: null,
    columnCount: null,
    width: null,
    height: null,
    padding: null,
}
function initBricks() {
    brick.rowCount = 1;
    brick.columnCount = 1;
    brick.width = 70;
    brick.height = 20;
    brick.padding = 10;

    for (let c = 0; c < brick.columnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brick.rowCount; r++) {
            bricks[c][r] = { 
                x: c * (brick.width + brick.padding) + 30, 
                y: r * (brick.height + brick.padding) + 30, 
                status: 1
            };
        }
    }
}

function drawBricks() {
    for (let c = 0; c < bricks.length; c++) {
        for (let r = 0; r < bricks[c].length; r++) {
            if (bricks[c][r].status == 1) {  
                let brick = bricks[c][r];
                ctx.fillStyle = 'green';  
                ctx.fillRect(brick.x, brick.y, 70, 20);  
            }
        }
    }
}
////////// 
