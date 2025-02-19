// Enoncé
// Gérer une liste de courses en affichant les informations dans la console du navigateur web.

// Détails
// La liste de courses est stockée dans une seule variable.
// Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
// Les fonctionnalités de gestion de la liste de courses sont :
// Ajouter un produit par son nom
// Supprimer un produit ayant un nom spécifique
// Supprimer tous les produits
// Afficher la taille et le contenu de la liste
// Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
// Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
// Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
// Ajouter 4 produits simples puis afficher les informations
// Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
// Supprimer tous les produits puis afficher les informations

let course = [];
function listAdd(produit){
    course.push(produit);
    console.log(`${produit} a etait ajouter a la liste de course`);
}

function listDelete(produit){
    course = course.filter((filtre) => filtre !== produit);
    console.log(`${produit} a etait enlever a la liste de course`);
    console.log(course)
}

function listDeleteAll(){
    course = []
    console.log(course)
    console.log(`Il y a ${course.length} produit, vous avez tout enlever`)
}

function listTotal(){
    console.log(`Il y a ${course.length} produits dans la list qui sont ${course}`)
}

// listAdd(produit = prompt(`Quel produit souhaitez vous ajoutez?`))
// listAdd(produit = prompt(`Quel produit souhaitez vous ajoutez?`))
// listAdd(produit = prompt(`Quel produit souhaitez vous ajoutez?`))
// listAdd(produit = prompt(`Quel produit souhaitez vous ajoutez?`))
listAdd('eau')
listAdd('framboise')
listAdd('banane')
listAdd('pomme')
listTotal()
// listDelete(produit = prompt(`Quel produit souhaitez vous retirez?`))
listDelete('framboise')
listTotal()
listDeleteAll()

