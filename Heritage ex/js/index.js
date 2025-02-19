// Créer une class User, qui a pour propriétés name et firstName et qui possède une méthode fullName.
// La méthode fullName prend deux arguments : name et firstName et retourne la concaténation des deux.
// Créer une class Admin qui hérite de la class User et qui ajoute une méthode canEditArticles. 
// Cette méthode devra retourner true.
// Console loguer les instances de ces classes et analyser les différences.

import { User } from "./user.js"
import { Admin } from "./admin.js"

let user = new User('Axel', 'B', 'dev', 99)
user.job = 'player'
user.age = 'salut'
console.log(user.age)
console.log(user.fullName())

let admin = new Admin('Yorick', 'M', 'joueur', 19)
admin.job = 'truc'
admin.age = 120
console.log(admin.fullName())

let age= new User('Samuel', 'C', 'chaudronnier', 21)
console.log(age.fullName())
age.age = 1099
console.log(age.fullName())


