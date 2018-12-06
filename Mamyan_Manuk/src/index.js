import {Author} from './author';
import {showData} from './data';

const developer = new Author('Manuk', 'Mamyan', '25', 'developer');

developer.renderAboutMe();

let elem = document.getElementsByClassName('developer');

elem.addEventListener('click', showData);