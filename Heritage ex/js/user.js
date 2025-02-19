import { Age } from "./age.js";
export class User {
    #job
    #age  // Instance de la classe Age pour gérer l'âge

    constructor(name, firstName, job, age) {
        this.name = name;
        this.firstName = firstName;
        this.#job = job;
        this.#age = new Age(age);  // Crée une instance de Age pour gérer l'attribut age
    }

    set job(changement) {
        this.#job = changement;
    }

    get job() {
        return this.#job;
    }

    // Setter de l'âge dans la classe User
    set age(changement) {
        this.#age.age = changement;  // Utilise le setter de Age pour valider et modifier l'âge
    }

    // Getter pour l'âge dans la classe User
    get age() {
        return this.#age.age;  // Utilise le getter de Age pour obtenir l'âge
    }

    fullName() {
        return `${this.name}, ${this.firstName}, ${this.#job}, ${this.age}`;  // Affiche l'âge via la classe Age
    }
}
