import { User} from "./user";
import Developer from "./Developer";
import { currentDate } from "./MyDate";

// const user = new User('vasya', 'pupkin');
// alert(user.sayHi());

const dev = new Developer('Бердников', 'Сергей', 'Юрьевич');

$(document).ready(() => {
    $('#developer').click( e => {
        e.preventDefault();
        alert(dev.whoiam());
    });

    $('#date-show').click( e => {
        e.preventDefault();
        alert(`Дата: ${currentDate}`);
    })

});