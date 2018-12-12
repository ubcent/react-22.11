import { User } from './user';
import { Car } from './car';

const user = new User('Ivan', 'Petrov');
const car = new Car('Lada', 450);
const fullName = user.getFullName();
user.createElement(fullName);

alert(car.giveCar());
