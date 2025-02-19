<?php
    session_start();

    // Je vérifie si j'ai reçu login et password
    if (isset($_POST['login']) && isset($_POST['password'])) {
        
        // Je vérifie si login et password sont bons
        if ($_POST['login'] == 'admin' && $_POST['password'] == 'admin') {
            
            // J'enregistre le fait que l'utilisateur est connecté en session
            $_SESSION['is_connected'] = true;
            
            // Redirige sur la page secret
            header('Location: ./secret.php');
            exit();
        } else {
            $error = 'T\'es mauvais Jack, c\'est la piquette Jack, tu sais pas joueerrr !';
        }
    }
    
    $template = './templates/index.php';
    require('./templates/layout.php');