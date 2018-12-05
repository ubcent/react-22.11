import { Developer, getData } from './developer';

import './today.css';

let button = document.createElement('button');
button.textContent = 'Today';
button.className = 'today';
document.body.appendChild(button);

const myself = new Developer('Алексей', 'Михайлов');

let developer = document.createElement('p');
developer.textContent = myself.present();
document.body.appendChild(developer);

button.addEventListener('click', () => {
    alert(getData());
});