<?php
    session_start();
    
    // Je supprime la session
    session_destroy();
    
    // Et je redirige vers l'accueil
    header('Location: ./index.php');
    exit();