// import User from './user';
//
// const user = new User('Vasya', 'Pupkin');
// alert(user.sayHi());

import './user.css';
//import * as Stuff from './Stuff'
import {Stuff} from './Stuff'
import {Render} from './Render'
import {Component} from './Component'
import {DateDisplay} from './DateDisplay'


window.onload = function () {

    let stuffList = [

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

    let panel = document.createElement('div');
    document.body.appendChild(panel);
    panel.id = 'table';
    let ul = document.createElement('ul');
    panel.appendChild(ul);
    ul.id = 'list';


    let menu = document.getElementById('list');


    // for (let value of stuffList) {
    //     console.log(value);
    //     let newLi = document.createElement('li');
    //     newLi.innerHTML = `${value[0]} ${value[1]} ${value[2]}`;
    //     menu.appendChild(newLi);
    // }
    for (let value of stuffList) {
        // console.log(value);
        let stuff = new Stuff(value[0], value[1], value[2]);
        let tags = new Render(stuff.familyName, stuff.firstName, stuff.additionalName, stuff.position);
        //console.log(tags);
        menu.appendChild(tags.render());

    }

    let panel2 = document.createElement('div');
    document.body.appendChild(panel2);
    panel2.id = 'butty';

    let panel3 = document.createElement('div');
    document.body.appendChild(panel3);
    panel3.id = 'mydate';

    let butt = document.getElementById('butty');
    // let b = document.createElement('button');
    // butt.appendChild(b);

    let buttO = new Component();
    butt.appendChild(buttO.createButt());

    document.getElementById('butty').addEventListener('click', () => {
        let date = new DateDisplay();
        document.getElementById('mydate').innerHTML = date.getData();
    })


};