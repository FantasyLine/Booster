<?php

namespace App\Controllers;

use App\Models\Pokemon;

// Notre controller pour gérer la capture d'un pokemon
class Capture extends AbstractController
{
    public ?string $template = './src/Views/capture.php';

    // Capture un pokemon et redirige vers la home
    public function display()
    {
        // Je récupère l'id du pokemon depuis l'URL
        if (empty($_GET['id'])) {
            echo "Error 404";
            return;
        }

        $id_pokemon = $_GET['id'];

        // Je vérifie si le pokemon existe dans la base
        $pokemonModel = new Pokemon();
        $pokemon = $pokemonModel->getById($id_pokemon);
        if (!$pokemon) {
            echo "Error 404";
            return;
        }

        // Je récupère l'id de l'utilisateur depuis la session
        if (empty($_SESSION['user'])) {
            echo "Error 404";
            return;
        }
        $user = $_SESSION['user'];

        // J'enregistre en base la capture du pokemon
        $pokemonModel->capture($id_pokemon, $user['id']);

        // Je redirige vers l'accueil
        header('Location: ?page=home');
        exit();
    }
}
