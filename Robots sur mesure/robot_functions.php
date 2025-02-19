<?php
/**
 * Return the current date with format 31 12 2025
 * @return string
 */
function getCurrentDate(): string {
    return date('d m Y');
}

function getCurrentTime(): string {
    return date('H:i:s');
}

function randomName(): string {
    $alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // On tire une première lettre au hasard
    $name = $alphabet[rand(0, strlen($alphabet) - 1)];
    
    // On tire une deuxieme lettre au hasard que l'on concatene
    $name .= $alphabet[rand(0, strlen($alphabet) - 1)];
    
    // On ajoute un tiret, et on tire un chiffre entre 0 et 9999, et on ajoute '0' à gauche jusqu'à avoir
    // 5 caracteres de long
    $name .= '-' . str_pad(rand(0, 9999), 4, '0', STR_PAD_LEFT);
    return $name;
}
function isEven(int $number): bool {
    // On utilise le modulo pour vérifier si c'est pair
    if ($number % 2 == 0) {
        return true;
    }
    
    return false;
}

function generateFibonacci (int $howMany): string {
    $fibonacci = [0, 1];
    for ($i = 1; $i <= $howMany; $i++) {
        $fibonacci[] = $fibonacci[$i] + $fibonacci[$i - 1];
    }
    
    return implode(' ', $fibonacci);
}


$randomNumber = rand(1, 10);
$robotName = randomName();
$is_familiar = false;

if (rand(1, 3) > 2) {
    $is_familiar = true;
}

function display($name){
    echo ("Le robot s'appelle $name");
}
?>