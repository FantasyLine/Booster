export class Error{
    constructor(id){
        this.id = document.querySelector(`#${id}`);
        this.error =  this.id.nextElementSibling; // balise frere de notre id ici le span
    }

    errorDisplay(message){

        // evite de superposer plusiseur fois la meme erreur
    if (this.error && this.error.classList.contains('form-error')) {
        this.error.textContent = message;
        return;
    }

    // Crée et ajoute un nouveau message d'erreur
    let span = document.createElement('span');
    span.className = 'form-error';
    span.textContent = message;
    this.id.insertAdjacentElement('afterend', span); // insert span en dessous de notre id        
    }


    errorClear(){    

        if (this.error && this.error.classList.contains('form-error')) {
            this.error.remove();
        }
    }
}
