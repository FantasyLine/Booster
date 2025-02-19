<?php

namespace App\Controllers;

use App\Models\User;

// Notre controller pour la page d'accueil
class Register extends AbstractController
{
    public ?string $template = './src/Views/register.php';
    
    // Affiche notre page d'inscription
    public function display()
    {
        require('./src/Views/layout.php');
    }


    // Traite la reception du formulaire d'inscription
    public function handleForm()
    {
        // On vérifie que email et password ne son pas vide
        if (empty($_POST['email']) || empty($_POST['password'])) {
            $this->error = 'Vous devez renseigner un e-mail et un mot de passe !';
            return;
        }

        // On recupère email et password et on calcul le hash
        $email = $_POST['email'];
        $password = $_POST['password'];
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // On insert l'utilisateur en base
        $userModel = new User();
        $userModel->insert($email, $hashed_password);
        $this->message = 'Votre compte a bien été créé !';
    }
}