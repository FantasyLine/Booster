// Énoncé
// Créer puis afficher en HTML un objet représentant une voiture :

// La marque de la voiture
// Son année de fabrication
// Sa date d'achat
// La liste des passagers (au moins 2), avec le prénom de chacun des passagers
// Détails
// Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
// On peut représenter n'importe quelle date en JavaScript en donnant une chaîne de caractères à la création d'une instance de la classe Date :
// Représente la date du 5 avril 2014, format américain YYYY-MM-DD.
// let myBirthday = new Date('2014-04-05');
// Rappels
// On peut stocker un objet dans un tableau tout comme on peut stocker un tableau dans un objet...

const voiture = {
    marque: 'Audi',
    annee: 2003,
    dateAchat: new Date("2005-03-13"),
    passagers: ['Axel', 'Valentin'],
    infoVoiture() {
        document.write(`
                <h1>Information du vehiculte</h1>
                <ul>
                    <li>Marque : ${this.marque}</li>
                    <li>Année de fabrication : ${this.annee}</li>
                    <li>Date d'achat : ${this.dateAchat.toLocaleDateString()}</li>
                    <li>Passagers : ${this.passagers}</li>
                </ul>
            
        `);
    }
};
voiture.infoVoiture()


// Second exercice 

let personne = {
    nom: "Dupont",
    prenom: "Marie",
    age: 35,
    sexe: "Femme",
    nationalite: "Française",
    profession: "Ingénieure",
    employeur: "TechCorp",
    adresse: {
        rue: "123 Rue de la Paix",
        ville: "Paris",
        codePostal: "75001",
        pays: "France"
    },
    contact: {
        email: "marie.dupont@example.com",
        telephone: "+33 1 23 45 67 89"
    },
    permisDeConduire: true,
    langues: ["Français", "Anglais", "Espagnol"],

};
function infoPersonne(){
    for(const [keys, values] of Object.entries(personne)){
        if( typeof values === 'object'){
            document.write(`${keys}: <br>`)
            for(const [key, value] of Object.entries(values)){
                document.write(`&nbsp;&nbsp;&nbsp; ${key} : ${value} <br>`)
            }
        }
        else{
            document.write(`${keys} : ${values} <br>`)
        }
    }
}
infoPersonne()
