import './current_date.css'
import moment from 'moment';

moment.locale('ru');

export class CurrentDate {
  getDate() {
    return moment().format('HH:mm:ss DD MMMM YYYY', 'ru');
  }

  showDate() {
    document.getElementById('show_date').addEventListener('click', () => {
      const date = document.getElementById('date');
      date.innerText = `${this.getDate()}`;
    })
  }
}