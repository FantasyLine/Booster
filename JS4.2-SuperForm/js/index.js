
import { Name, Email, Age } from './valide.js';
import { Error } from './error.js';

let form = document.querySelector('form')

///valeur form
let nameInput
let emailInput
let ageInput

///valide.js 
let checkerName 
let checkerMail
let checkerAge ;

///resultat final
let nameResult
let emailResult
let ageResult

///Error

let nameError
let emailError
let ageError 

function verification(result, id, error){
    if (!result) {
        error.errorDisplay(`Mauvais ${id}`);
    } else {
        error.errorClear();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    ///valeur form
    nameInput = document.getElementById('name').value;
    emailInput = document.getElementById('email').value;
    ageInput = document.getElementById('age').value;

    ///valide.js 
    checkerName = new Name(nameInput);
    checkerMail = new Email(emailInput);
    checkerAge = new Age(ageInput);

    ///resultat final
    nameResult = checkerName.checkerName();
    emailResult = checkerMail.checkerMail();
    ageResult = checkerAge.checkerAge();

    ///Error

    nameError = new Error('name');
    emailError = new Error('email');
    ageError = new Error('age');

    verification(nameResult, 'nom', nameError);
    verification(emailResult, 'email', emailError);
    verification(ageResult, 'age', ageError);

    if (nameResult === true && emailResult === true && ageResult === true) {
        let contact = { 
            name: nameInput, 
            email: emailInput, 
            age: ageInput 
        };
        localStorage.setItem('contact', JSON.stringify(contact));
        console.log('tout est bon');
        alert('tout est bon');
    }
});



