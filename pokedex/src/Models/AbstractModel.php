<?php

namespace App\Models;

abstract class AbstractModel
{
    protected \PDO $db;
    
    // Tous les modèle récupères la global $db
    public function __construct ()
    {
        global $db;
        $this->db = $db;
    }
}

