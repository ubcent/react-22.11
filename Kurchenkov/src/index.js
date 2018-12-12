import { User } from './user';
import { Car } from './car';

const user = new User('Ivan', 'Petrov');
const car = new Car('Lada', 450);
alert(user.getFullName());
alert(car.giveCar());
