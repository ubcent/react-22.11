import {User} from './user';
import {Click} from './click';

window.onload = () => {
    const user = new User('Василий', 'Иванов', 'Петрович');
    user.sayName();
    const click = new Click();
    click.onClick();
} 
