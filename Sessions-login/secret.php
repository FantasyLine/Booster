<?php
    session_start();
    
    // Je vérifie si la variable de session is_connected est manquante ou fausse
    if (!isset($_SESSION['is_connected']) || !$_SESSION['is_connected']) {
        header('Location: ./index.php');
        exit();
    }

    $template = './templates/secret.php';
    require('./templates/layout.php');