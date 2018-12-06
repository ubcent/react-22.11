import './styles.css';
import {createDeveloper} from './user';

let developer1;

function funcCreateDev(){
  const inputCollection = document.getElementsByTagName('input');
  developer1 = new createDeveloper (inputCollection[0].value, inputCollection[1].value, inputCollection[2].value);
  developer1.newDeveloper(developer1);
};

const button1 = document.getElementsByTagName("button")[0];
button1.addEventListener('click', function(event){
  funcCreateDev();
  event.preventDefault();
});

const button2 = document.getElementsByTagName("button")[1];
button2.addEventListener('click', function(event){
  developer1.findDeveloper();
  event.preventDefault();
});