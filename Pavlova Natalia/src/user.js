import './user.css';

export class User {
    constructor(name, surname, middleName) {
        this.name = name;
        this.surname = surname;
        this.middleName = middleName;
        this.regName =  /^[a-zа-я\-]{1,30}$/i;
        this.regData = null;
    }

    sayName() {
        if(this.validParam()) {
            const text = document.getElementById('name');
            text.innerHTML = `<p class="text">${this.surname} ${this.name} ${this.middleName}</p>`;
            return;
        } 
    }
    validParam() {
        if(this.regName.test(this.name) && this.regName.test(this.surname) && this.regName.test(this.middleName)) {
            return true;
        }
    }

}