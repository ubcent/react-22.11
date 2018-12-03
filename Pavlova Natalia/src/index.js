import {User} from './user';

window.onload = () => {
    const user = new User('Василий', 'Иванов', 'Петрович');
    user.sayName();
} 
