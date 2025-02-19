///creer assassin, une methode et les appeler dans index

export class assassin{
    constructor(nom, mana, hp, speed, force){
        this.personnage = new Personnage(nom, mana, hp, speed, force);
        console.log(`test`)
    }
    test(){
        console.log(`bonjour je suis un assassin`)
    }
}
export class Personnage {

    constructor(nom, mana, hp, speed, force) {
        this.nom = nom;
        this.mana = mana;
        this.hp = hp;
        this.speed = speed;
        this.force = force;
    }

    afficherPersonnage() {
        document.body.innerHTML += `
            <h1>Nom : ${this.nom}</h1>
            <p>HP : ${this.hp}</p>
            <p>Mana : ${this.mana}</p>
            <p>Force : ${this.force}</p>
            <p>MoveSpeed : ${this.speed}</p>
        `;
    }
}


