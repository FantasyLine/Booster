<?php
include 'generic_functions.php';
include 'robot_functions.php';

$robot_name='';
$error='';
var_dump(validate($_POST['robot_name']));
if (isset($_POST['robot_name'])){
    if(validate($_POST['robot_name'])){
        $robot_name = $_POST['robot_name'];
    } else {
        $error = ("Erreur vous devez mettre 2 lettre majuscule, un tiret et 4 nombre comme : XX-9999");
    }
}
if (isset($_POST['is_familiar'])) {
    $is_Familiar = $_POST['is_familiar'];
} else{
     isEven($is_familiar);
}
 
//if (emptyInput($_POST['robot_name'])){
//    $robotName = randomName();
//}
include 'homepage.phtml';