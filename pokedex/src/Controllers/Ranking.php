<?php

namespace App\Controllers;

use App\Models\User;

// Notre controller pour gérer la page de classement
class Ranking extends AbstractController
{
    public ?string $template = './src/Views/ranking.php';

    // Affiche la page de classement
    public function display()
    {
        // Je récupère mes utilisateurs classés
        $userModel = new User();
        $users = $userModel->getRanking();
        
        // J'affiche la page
        require('./src/Views/layout.php');
    }
}