<?php

namespace App\Controllers;

use App\Models\User;

// Notre controller pour la déconnexion
class Logout extends AbstractController
{
    public ?string $template = './src/Views/logout.php';
    
    // Déconnecte et redirige à l'accueil
    public function display()
    {
        $_SESSION = [];

        session_destroy();
        header('Location: ?page=home');
    }
}