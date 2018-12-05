import { User} from "./user";
import Developer from "./Developer";
import { currentDate } from "./MyDate";

// const user = new User('vasya', 'pupkin');
// alert(user.sayHi());

const dev = new Developer('Бердников', 'Сергей', 'Юрьевич');

$(document).ready(function () {
    $('#developer').click(function (event) {
        event.preventDefault();
        alert(dev.whoiam());
    });

    $('#date-show').click(function (event) {
        event.preventDefault();
        alert(`Дата: ${currentDate}`);
    })

});