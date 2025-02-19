<?php

spl_autoload_register(function ($classname) {
    // $classname représente la classe que le programme souhaite instancier avec l'ensemble de ses namespace, ici "App\Models\User" 
    // On remplace les backslashes du namespace par des slashs de chemin de dossier, ce qui nous donne :  "App/Models/User" 
    $path = str_replace('\\', '/', $classname);

    // On remplace "App" par "src" dans le chemin, ce qui nous donne : "src/Models/User" 
    $path = str_replace('App', 'src', $path);

    // On ajoute l'extension .php, ce qui nous donne : "src/Models/User.php" 
    $filename = $path . '.php';

    // On inclut le fichier si il existe
    if (file_exists($filename)) {
        include $filename;
    }
});