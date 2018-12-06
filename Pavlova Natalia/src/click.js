import './click.css';

export class Click {

    lookData() {
        let date = new Date();
        let day = date.getDate();
            if(day < 10) {
                day = `0${day}`;
            }
        let month = date.getMonth();
        month += 1;
            if(month < 10) {
                month = `0${month}`;
            }
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
    onClick() {
        document.getElementById('button').addEventListener('click', event => {
              const data = this.lookData();
              document.getElementById('data').innerHTML = data;
        })
    }
}