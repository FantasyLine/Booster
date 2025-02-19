<h2>Login page</h2>
<form action="" method="POST">
    <?php if (isset($error)) { ?>
        <p class="alert error"><?= $error ?></p>
    <?php } ?>
    <label for="login">Identifiant : </label>
    <input type="text" name="login" id="login" placeholder="Votre identifiant" />
    
    <label for="password">Mot de passe : </label>
    <input type="password" name="password" id="password" placeholder="Votre mot de passe" />
    
    <button>Se connecter</button>
</form>