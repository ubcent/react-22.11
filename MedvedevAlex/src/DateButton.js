export default class DateButton {
  constructor(buttonName, parentDivId) {
    this.buttonName = buttonName;
    this.parentDiv = parentDivId;
    this.buttonEventListener();
  }

  // конструипует кнопку: ищет родителя и вставляет туда HTML
  buttonConstructor() {
    let parentDiv = document.getElementById(this.parentDiv);
    parentDiv.innerHTML = `<button id='dateButton'>${this.buttonName}</button>`;
  }

  // создаём слушателя событий клика на кнопку
  buttonEventListener() {
    document.getElementById(this.parentDiv).addEventListener('click', (e) => {
      if (e.target.tagName === "BUTTON") {
        this.renderDateField();
      }
    })
  }

  // метод, предоставляющий нам дату в нужном объёме
  getDate() {
    let date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}<br>${date.getHours()}:${date.getMinutes()}` +
      `:${date.getSeconds()}`;
  }

  // ищем div, предучмотренный для вывода даты и выводим в него дату
  renderDateField() {
    let dateDiv = document.getElementById('dateDiv');
    dateDiv.innerHTML = '';
    dateDiv.innerHTML = this.getDate();
  }
}

import './dateButton.css';