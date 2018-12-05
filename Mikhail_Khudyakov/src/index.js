import {Developer} from "./developer";
import {output} from "./date";

let developer = new Developer('Mikhail', 'Khudyakov', 'Vladimirovich');

$(function () {
    $('#dev-info').text(developer.sayHi());
    $('#show-date').on('click', function () {
        alert(`Текущая дата: ${output}`);
    });
});
