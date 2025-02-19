<h2>La liste des pokemon !</h2>

<div class="grid grid-4">
    <?php foreach ($pokemons as $pokemon) { ?>
        <article class="center pokemon-card">

            <?php if (!empty($pokemon['capture_by'])) { ?>
                <div class="overlay">
                    <img src="public/pokeball.png" class="overlay-image" alt="Pokémon capturé !">
                </div>
            <?php } ?>

            <h4><?= htmlspecialchars($pokemon['name']) ?></h4>
            <div class="pokemon-img">
                <img src="<?= htmlspecialchars($pokemon['img']) ?>" />
            </div>
            <div class="pokemon-infos">
                <?php include('./src/Views/incs/pokemon-infos.php'); ?>
            </div>

            <?php if (empty($pokemon['capture_by'])) { ?>
                <?php if (!empty($_SESSION['user'])) { ?>
                    <a href="?page=capture&id=<?= $pokemon['id']; ?>" role="button" class="button-catch" >
                        <?php if (in_array($pokemon['num'], \App\Models\Pokemon::LEGENDARY_POKEMONS)) { ?>
                            <img src="public/masterball-icon.png" alt="Masterball" class="pokeball-icon">
                        <?php } else { ?>
                            <img src="public/pokeicon.png" alt="Pokéball" class="pokeball-icon">
                        <?php } ?>
                        Je l'ai capturé !
                    </a>
                <?php } ?>
            <?php } ?>
        </article>
    <?php } ?>
</div>
