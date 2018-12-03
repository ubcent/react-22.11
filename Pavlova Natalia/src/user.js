import './user.css';

export class User {
    constructor(name, surname, middleName) {
        this.name = name;
        this.surname = surname;
        this.middleName = middleName;
    }

    sayName() {
        const text = document.getElementById('name');
        text.innerHTML = `<p class="text">${this.surname} ${this.name} ${this.middleName}</p>`;
    }
}