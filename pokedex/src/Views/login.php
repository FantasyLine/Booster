<h2>Connexion</h2>
<form action="" method="POST">
    <?php include('./src/Views/incs/messages.php'); ?>

    <div>
        <label for="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required>
    </div>
    <div>
        <button type="submit">Se connecter</button>
    </div>
</form>