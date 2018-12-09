import User from './user';

import './user.css';

import {Stuff} from './Stuff'
import {Render} from './Render'
import {Component} from './Component'
import {DateDisplay} from './DateDisplay'


window.onload = function () {

    const stuffList = [

        ["Лобанов", "Федот", "Никитевич"],
        ["Горбачёв", "Бронислав", "Кондратович"],
        ["Зиновьев", "Вадим", "Алексеевич"],
        ["Комарова", "Мария", "Арсеньевна"],
        ["Фомичёв", "Валерьян", "Валерьянович"],
        ["Сафонова", "Наталья", "Витальевна"],
        ["Брагин", "Филат", "Артёмович"],
        ["Поляков", "Валерий", "Степанович"],
        ["Матвеева", "Мария", "Гордеевна"],
        ["Громова", "Лукия", "Филатовна"],
        ["Никифоров", "Максим", "Тихонович"],
        ["Соколова", "Фаина", "Дамировна"],
        ["Дроздова", "Евпраксия", "Юлиановна"],
        ["Носкова", "Майя", "Юрьевна"],
        ["Лаврентьева", "Зоя", "Ильяовна"],
        ["Морозов", "Макар", "Серапионович"],
        ["Веселов", "Владислав", "Романович"],
        ["Архипов", "Мэлор", "Георгьевич"],
        ["Коновалова", "Василиса", "Германовна"],
        ["Владимиров", "Александр", "Лукьянович"],

    ];

    const panel = document.createElement('div');
    document.body.appendChild(panel);
    panel.id = 'table';
    const ul = document.createElement('ul');
    panel.appendChild(ul);
    ul.id = 'list';


    const menu = document.getElementById('list');



    for (let value of stuffList) {

        let stuff = new Stuff(value[0], value[1], value[2]);
        let tags = new Render(stuff.familyName, stuff.firstName, stuff.additionalName, stuff.position);

        menu.appendChild(tags.render());

    }

    const panel2 = document.createElement('div');
    document.body.appendChild(panel2);
    panel2.id = 'butty';

    const panel3 = document.createElement('div');
    document.body.appendChild(panel3);
    panel3.id = 'mydate';

    const butt = document.getElementById('butty');

    const buttO = new Component();
    butt.appendChild(buttO.createButt());

    document.getElementById('butty').addEventListener('click', () => {
        const date = new DateDisplay();
        document.getElementById('mydate').innerHTML = date.getData();
    })


};