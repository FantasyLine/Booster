export class Name{
    constructor(name){
        this.name = name;
    }
    checkerName() {
        let name =  /^[a-zA-Z -]+$/  // Regex pour chaine de caracter a .test
        if (!name.test(this.name)) {
            console.log(`Mauvais nom`);
            return false;
        } else {
        return true;
        }
    }
}

export class Email{
    constructor(mail){
        this.mail = mail;
    }
    checkerMail(){
        let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex email a .test
        if (!email.test(this.mail)){
            console.log(`Mauvais mail`);
            return false;
        }
        return true;
    }
}

export class Age{
    constructor(age){
        this.age = age;
    }
    checkerAge(){
        if(isNaN(this.age) || this.age <= 0 || this.age > 100){
            console.log(`Mauvais age`);
            return false;
        }
        return true;
    }
}