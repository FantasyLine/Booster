<?php

function emptyInput($input) {
    return empty($input);
}

function issetInput($input) {
    return isset($input);
}

function familiar($bool){
    if ($bool == true){
        echo ("<p class='familiar'>Salut !!!!!!!</p>");
    } else {
        echo ("<p>Coucou<p>");
    }
}

function validate($name){
    if(preg_match('/^[A-Z]{2}-\d{4}$/', $name)){
        return true;
    } else {
        return false;
    }
}