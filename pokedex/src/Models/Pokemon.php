<?php

namespace App\Models;

class Pokemon extends AbstractModel
{
    // Une constante avec la liste des numeros des pokemons légendaires
    const LEGENDARY_POKEMONS = ['150', '151', '144', '145', '146'];


    // Une fonction qui va retourner la liste de tous les pokemons
    public function getAll()
    {
        $query = $this->db->prepare('SELECT * FROM pokemon ORDER BY num');
        $query->execute();
        
        return $query->fetchAll();
    }

    // Une fonction qui retourne un pokemon par son id
    public function getById($id)
    {
        $query = $this->db->prepare('
            SELECT * 
            FROM pokemon 
            WHERE id = :id');
        $query->execute([
            'id' => $id,
        ]);
        
        return $query->fetch();
    }

    // Une fonction qui capture un pokemon pour un utilisateur
    public function capture($pokemon_id, $user_id)
    {
        $query = $this->db->prepare('
            INSERT INTO user_pokemon_captured (user_id, pokemon_id, captured_at)
            VALUES (:user_id, :pokemon_id, NOW())
        ');

        $query->execute([
            'user_id' => $user_id,
            'pokemon_id' => $pokemon_id,
        ]);
    }

    // Une fonction qui récupère la liste des pokemons avec leur état de capture
    // pour un utilisateur
    public function getWithCaptureForUser($user_id)
    {
        $query = $this->db->prepare('
            SELECT p.*, up.user_id AS capture_by
            FROM pokemon AS p
            LEFT JOIN user_pokemon_captured AS up
            ON p.id = up.pokemon_id AND up.user_id = :user_id
            ORDER BY p.num
        ');
        $query->execute([
            'user_id' => $user_id,
        ]);
        
        return $query->fetchAll();
    }
}

