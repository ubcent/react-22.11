import './date-button.css';

export default class DateButton {
  /**
   * create an element 'button' on click show date on it
   */
  constructor() {}

  /**
   * @return today date in format  D-M-YYYY
   */
  getDate() {
    let d = new Date();
    const fullDate = `${d.getDate()} - ${d.getMonth()+1} - ${d.getFullYear()}`;
    return fullDate;
  }

  /**
   * createElement 'button' with onClick handler, to show date
   */
  createButton() {
    let buttonDate = document.createElement('button');
    buttonDate.classList.add('button_get-date');
    buttonDate.innerText = 'Click to get date';
    buttonDate.addEventListener('click', (e) => {
      buttonDate.innerHTML = this.getDate();
    })
    document.body.appendChild(buttonDate);
  }
}