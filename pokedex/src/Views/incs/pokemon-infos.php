<?php 
    
    $typeIconMap = [
        "Grass" => "bi-tree",
        "Water" => "bi-droplet",
        "Fire" => "bi-fire",
        "Electric" => "bi-lightning",
        "Psychic" => "bi-hypnotize",
        "Rock" => "bi-box",
        "Ground" => "bi-globe-europe-africa",
        "Ice" => "bi-snow",
        "Bug" => "bi-bug",
        "Dragon" => "bi-gitlab",
        "Ghost" => "bi-snapchat",
        "Fighting" => "bi-shield-exclamation",
        "Fairy" => "bi-stars",
        "Poison" => "bi-virus",
        "Flying" => "bi-wind",
        "Normal" => "bi-pentagon"
    ];

    $icon = $typeIconMap[$pokemon['type']] ?? "bi-question-circle";

?>

<span class="infos">
    <span>
        <i class="<?= $icon ?>"></i> <?= $pokemon['type'] ?>
    </span>
    <span>
        <i class="bi-feather"></i> <?= $pokemon['weight'] ?>
    </span>
    <span>
        <i class="bi-arrows-vertical"></i> <?= $pokemon['height'] ?>
    </span>
</span>
