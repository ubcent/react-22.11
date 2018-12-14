import {User} from './user';
import {CurrentDate} from './current_date';

window.onload = () => {
  const user = new User('Max', 'Savostyanov');
  user.sayUserName();
  const currentDate = new CurrentDate();
  currentDate.showDate();
};

