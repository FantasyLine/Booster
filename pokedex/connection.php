<?php
    // Connect to database
    $db_config = [
        'host' => '127.0.0.1',
        'port' => 3306,
        'dbname' => 'pokedex', // Renseignez le nom de votre base (voir infos sur phpmyadmin)
        'username' => 'root', // Votre nom d'utilisateur
        'password' => 'root', // Votre mot de passe
    ];
    
    $db = new PDO(
        'mysql:host=' . $db_config['host'] . ';port=' . $db_config['port'] . ';dbname=' . $db_config['dbname'] . ';charset=utf8',
        $db_config['username'],
        $db_config['password'],
        [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Retourne les resultats comme un tableau associatif
        ],
    );