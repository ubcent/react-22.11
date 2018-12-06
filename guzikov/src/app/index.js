import { User } from './components/user/user';
import { CurrentDate } from './components/dateComponent/date'

const user = new User('Sergei', 'Guz');
alert(user.sayHi());

const today = new CurrentDate();

document.getElementById('dateBtn').onclick = function() {
    let text = document.createTextNode(today.showDate());
    document.body.appendChild(text);
}

