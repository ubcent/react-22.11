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
    lookData() {
        let date = new Date();
        let day = date.getDate();
            if(day < 10) {
                day = `0${day}`;
            }
        let dayWeek = date.getDay();
            if(dayWeek < 10) {
                dayWeek = `0${dayWeek}`;
            }
        const year = date.getFullYear();
        const dateObj = `${day}.${dayWeek}.${year}`;
        console.log(dateObj);
    }
}