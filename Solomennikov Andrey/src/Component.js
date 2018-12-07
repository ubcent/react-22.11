export class Component {
    constructor(buttName){

        this.buttName = "Вывод даты";
    }

    createButt() {
        let newButt = document.createElement('button');
        newButt.innerHTML = this.buttName;
        return newButt
    }
}