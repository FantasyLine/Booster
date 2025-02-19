
class Voiture{
    constructor(modele, annee){
        this.annee = annee
        this.modele = modele
    }

    afficherInfo(){
        return `Modele:${this.modele}, Annee:${this.annee}`
    }
}

let garage = [
    new Voiture('Toyota', 2020),
    new Voiture('Honda', 2015),
    new Voiture('Ford', 2018),
]

for (let i = 0; i < garage.length; i++) {
    console.log(garage[i].afficherInfo())
    document.body.innerHTML += `<p>${garage[i].afficherInfo()}</p>`
}
