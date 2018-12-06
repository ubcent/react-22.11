import getDeveloper from './developer';

import DateButton from './DateButton';

let dateButton = new DateButton('Show me current date', 'forButton');

window.onload = ()=> {

getDeveloper();

dateButton.buttonConstructor();
};