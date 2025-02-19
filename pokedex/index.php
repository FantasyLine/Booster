<?php
session_start();

require('./autoload.php');
require('./connection.php');

// On cherche la page à utiliser, et on utilise home par défaut
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 'home';
}


// Ici on route selon la page vers le bon controller
switch ($page) {
    case 'home':
        $controller = new \App\Controllers\Home();
        $controller->display();
        break;

    case 'ranking':
        $controller = new \App\Controllers\Ranking();
        $controller->display();
        break;

    case 'register':
        $controller = new \App\Controllers\Register();
        $controller->display();
        break;
    
    case 'login':
        $controller = new \App\Controllers\Login();
        $controller->display();
        break;

    case 'logout':
        $controller = new \App\Controllers\Logout();
        $controller->display();
        break;

    case 'capture':
        $controller = new \App\Controllers\Capture();
        $controller->display();
        break;
    
    default:
        echo "Error 404";
}
