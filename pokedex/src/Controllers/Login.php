<?php

namespace App\Controllers;

use App\Models\User;

// Notre controller pour la page d'accueil
class Login extends AbstractController
{
    public ?string $template = './src/Views/login.php';
    
    // Affiche notre page de login
    public function display()
    {
        require('./src/Views/layout.php');
    }


    // Traite la reception du formulaire de connexion
    public function handleForm()
    {
        // On vérifie que email et password ne son pas vide
        if (empty($_POST['email']) || empty($_POST['password'])) {
            $this->error = 'Vous devez renseigner un e-mail et un mot de passe !';
            return;
        }

        // On recupère email et password
        $email = $_POST['email'];
        $password = $_POST['password'];

        // On vérifie si l'email correspond à un utilisateur
        $userModel = new User();
        $user = $userModel->getByEmail($email);
        if (!$user) {
            $this->error = 'Ce compte n\'existe pas.';
            return;
        }

        // On vérifie si le mot de passe entré correspond à celui en base
        $match = password_verify($password, $user['password']);
        if (!$match) {
            $this->error = 'Mot de passe incorrect.';
            return;
        }

        // Si on est ici, alors l'utilisateur a rentré les bon identifiants
        // On initialise la variable de session user
        $_SESSION['user'] = $user;
        
        // On redirige vers la liste de pokemons
        header('Location: ?page=home');
        exit();
    }
}