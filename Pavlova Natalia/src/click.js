import './click.css';

export class Click {

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
        return `${day}.${dayWeek}.${year}`;
    }
    onClick() {
        document.getElementById('button').addEventListener('click', event => {
              const data = this.lookData();
              document.getElementById('data').innerHTML = data;
        })
    }
}