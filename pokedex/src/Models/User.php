<?php

namespace App\Models;

class User extends AbstractModel
{
    // Une fonction qui va retourner la liste de tous les user
    public function getAll()
    {
        $query = $this->db->prepare('SELECT * FROM user');
        $query->execute();
        
        return $query->fetchAll();
    }

    // Une fonction qui va retourne un utilisateur par son email
    public function getByEmail(string $email)
    {
        $query = $this->db->prepare('
            SELECT * 
            FROM user
            WHERE email = :email
        ');
        $query->execute([
            'email' => $email,
        ]);
        
        return $query->fetch();
    }

    // Une fonction qui va retourner tous les utilisateurs, classés par nombre de pokemons capturés
    public function getRanking()
    {
        $query = $this->db->prepare('
            SELECT u.*, COUNT(up.id) AS nb_captured
            FROM user AS u
            LEFT JOIN user_pokemon_captured AS up
            ON u.id = up.user_id
            GROUP BY u.id
            ORDER BY nb_captured DESC
        ');
        $query->execute();
        
        return $query->fetchAll();
    }

    // Insérer un nouvel utilisateur en base
    public function insert(string $email, string $password_hash)
    {
        $query = $this->db->prepare('
            INSERT INTO user (email, password)
            VALUES (:email, :password)
        ');

        $query->execute([
            'email' => $email,
            'password' => $password_hash,
        ]);
        
        return $query->fetchAll();
    }
}

