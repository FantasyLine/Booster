let form = document.querySelector('#form')

class Request{
    inputInfo(){
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            console.log(input.value);
        });
    }

}
form.addEventListener('submit', (defaut) => {
    defaut.preventDefault();
    
    let request = new Request();
    request.inputInfo();
});


