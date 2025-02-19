Projet - Arkanoid 1
Animer notre Balle
Vous allez tout d'abord créer une balle, c'est un cercle, à vous de chercher dans la documentation comment le tracer.

Puis à l'aide de requestAnimationFrame() vous allez animer cette balle pour qu'elle fasse dans un premier temps des rebonds du haut vers le bas !

A vous de jouer :

on va programmer une fonction qui va lancer un requestAnimationFrame(). Cette fonction va s'appeler playGame()
cette fonction va commencer par décrémenter la position y de notre balle, la position de la balle va monter,
elle va ensuite appeler une fonction displayGame() qui va réinitialiser le Canvas et afficher tout ce qui doit être afficher dans le Canvas, ici la balle à la bonne position,
puis elle va lancer un appel à requestAnimationFrame() pour se rappeler elle même au prochain rafraichissement,
quand notre balle arrive à 0 sur y elle rebondit et donc sa direction change, la fonction va donc incrémenter la position y de notre balle,
quand notre balle arrive en haut du Canvas elle rebondit et donc sa direction change, la fonction va donc décrémenter la position y de notre balle,
etc...
Astuce : On peut créer un objet ball représentant la balle avec comme propriétés :

sa position X,
sa position Y,
sa couleur,
son rayon
sa direction sur Y
On peut créer un objet game représentant le jeu avec comme propriétés :

la largeur du plateau de jeu,
la hauteur du plateau de jeu,
sa couleur,
On peut gérer la direction de la balle avec une variable (ci dessus dans l'objet game) Si cette direction est égale à 1 la position de la balle sera incrémentée, si elle est égale à -1 elle sera décrémentée.

let direction = 1;
let position = 0;

// on fait évoluer la position
position += 1 *  direction; //ici position est incrémentée de 1

direction = -1;
position += 1 *  direction; //ici position est décrémentée de 1


# # # Déplacer la plateau
Maintenant que nous avons une balle qui rebondit de haut en bas, nous allons ajouter à notre jeu un plateau. Nous allons pouvoir déplacer le plateau de droite à gauche. A l'étape suivante nous ferons en sorte que la balle rebondisse sur le plateau. Mais pour le moment concentrons nous sur le dessin du plateau et les évènements claviers pour le déplacer.

A vous de jouer :

on va dessiner la plateau à chaque fois que l'on rafraichit le Canvas. Donc dans notre fonction displayGame()
on va créer une nouvelle fonction initGame() qui va reprendre l'initialisation du jeu déja présente dans le gestionnaire d'évènement DOMContentLoaded,
cette fonction initGame() va déclarer notre gestionnaire d'évènements quand nous appuyons sur le clavier. Nous pourrions appeler ce gestionnaire keyboardEvent()
si on appuie sur la flèche droite la position x du plateau est incrémentée de quelques pixels et ne dépasse pas le bord droit du Canvas,
si on appuie sur la flèche gauche la position x du plateau est décrémentée de quelques pixels et ne dépasse pas le bord gauche du Canvas
Astuce : On peut créer un objet paddle représentant le plateau avec comme propriété :

sa position X,
sa position Y,
sa vitesse de déplacement (nombre de pixels de déplacement à chaque appuie sur une touche),
sa couleur,
sa largeur,
sa hauteur,
sa direction (-1 gauche, 1 droite, 0 stop)
Pour le déplacement du plateau on va considérer que :

si la touche droite est enfoncée le plateau se déplacera à droite,
si elle est relachée le plateau ne se déplace plus
idem pour la touche gauche. Notre gestionnaire d'évènement clavier va changer la direction du plateau en fonction que l'on appuie ou relache la touche et c'est dans la fonction playGame() que le plateau sera déplacé.
