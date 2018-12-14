import './user.css';

export class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    createElement(fullName){
        const block = document.createElement('div');
        block.classList.add('block');
        block.textContent = fullName;
        document.body.appendChild(block);
    }
}
