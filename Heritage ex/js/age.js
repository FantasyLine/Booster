export class Age {
    #age  // Attribut privé pour l'âge

    constructor(age) {
        this.age = age;  // Utilise le setter pour initialiser l'âge
    }

    // Getter pour obtenir l'âge
    get age() {
        return this.#age;
    }

    // Setter pour modifier l'âge avec validation
    set age(value) {
        if (typeof value === 'number' && value > 0 && value < 120) {
            this.#age = value;
        } else {
            console.log(`Erreur d'age, la valeur '${value}' ne marche pas. Cela doit être un nombre compris entre 1 et 119.`);
        }
    }
}
