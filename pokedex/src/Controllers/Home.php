<?php

namespace App\Controllers;

use App\Models\Pokemon;

// Notre controller pour la page d'accueil
class Home extends AbstractController
{
    public ?string $template = './src/Views/home.php';
    
    // Affiche notre page d'accueil
    public function display()
    {
        $pokemonModel = new Pokemon();
        
        // Je vérifie si l'utilisateur est connecté
        if (!empty($_SESSION['user'])) {
            $user = $_SESSION['user'];

            // Je récupère la liste des pokemons avec leur état de capture
            // pour cet utilisateur
            $pokemons = $pokemonModel->getWithCaptureForUser($user['id']);
        } else {
            // Sinon je récupère juste la liste de tous les pokemons
            $pokemons = $pokemonModel->getAll();
        }
        
        require('./src/Views/layout.php');
    }
}