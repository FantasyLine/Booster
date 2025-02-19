<?php

namespace App\Controllers;

// Notre controller pour la page de contact
abstract class AbstractController
{
    // Des variables pour stocker le template à afficher, les messages d'erreur ou de succès
    public ?string $template = null;
    public ?string $error = null;
    public ?string $message = null;
    
    // Joue la fonction handleForm si $_POST n'est pas vide
    public function __construct()
    {
        if (!empty($_POST)) {
            $this->handleForm();
        }
    }
    
    
    // Affiche notre page de contact
    public function display()
    {
        require('./src/Views/layout.php');
    }
    
    
    // La fonction qui gérera la réception d'un formulaire $_POST
    public function handleForm()
    {
        // By default do nothing
        return;
    }
}