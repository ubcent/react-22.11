import { Developer, getData } from './main';

import './today.css';

const button = document.createElement('button');
button.textContent = 'Today';
button.className = 'today';
document.body.appendChild(button);

const myself = new Developer('Алексей', 'Михайлов');

const developer = document.createElement('p');
developer.textContent = myself.present();
document.body.appendChild(developer);

button.addEventListener('click', () => {
    alert(getData());
});