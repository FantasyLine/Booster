<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/css/pico.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="./public/css/style.css">
    <title>My Pokedex</title>
</head>
<body>
    <header class="container-fluid pico-background-azure-600">
        <nav class="container">
            <ul>
                <li>
                    <strong>My Pokedex</strong>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="?page=home" role="button">Home</a>
                </li>

                <li>
                    <a href="?page=ranking" role="button">Classement</a>
                </li>

                <?php if (!empty($_SESSION['user'])) { ?>
                    <li>
                        <a href="?page=logout" role="button">Déconnexion</a>
                    </li>
                <?php } else { ?>
                    <li>
                        <a href="?page=register" role="button">Inscription</a>
                    </li>
                    <li>
                        <a href="?page=login" role="button">Connexion</a>
                    </li>
                <?php } ?>
            </ul>
        </nav>
    </header>

    <main class="container">
        
        <?php require($this->template); ?>
        
    </main>
</body>
</html>