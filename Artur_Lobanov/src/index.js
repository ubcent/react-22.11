//Here is my homework
import {User} from './user';
import {now} from './date';


const user = new User('Vasya', 'Pupkin', 'Anatolievich');
user.userData();

let button = document.getElementById('press');
button.addEventListener('click', () => {
    alert(now);
});
