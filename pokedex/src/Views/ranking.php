<svg class="leader-title" width="100%" height="300px" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Define the curved path -->
    <path id="curved-path" d="M 10 100 Q 74 14 403 8 T 861 100" fill="transparent"/>

    <!-- Use the textPath to follow the curve -->
    <text x="50%" y="50%" font-family="Pokemon Solid" letter-spacing="0" font-size="48" font-weight="bold" fill="#FDC00D" stroke="#2A4491" stroke-width="4" text-anchor="middle" alignment-baseline="middle">
        <textPath href="#curved-path" startOffset="0%" text-anchor="middle">
        Classement des dresseurs
        </textPath>
    </text>
</svg>
<img class="leader-banner" src="public/banner.png" />

<?php
    $classes = [
        'gold',
        'silver',
        'bronze'
    ];
?>

<?php foreach ($users as $index => $user) { ?>
    <article>
        <h3 class="<?= ($classes[$index] ?? '') ?>">#<?= $index + 1; ?> <?= htmlspecialchars($user['email']); ?></h3>
        <main>
            <p class="">
                Pokémons capturés: 
                <span class="text-success"><?= $user['nb_captured'] ?></span>
                /
                <span class="text-muted">151</span>
            </p>

            <progress value="<?= $user['nb_captured'] ?>" max="151"></progress>
        </main>
    </article>
<?php } ?>
