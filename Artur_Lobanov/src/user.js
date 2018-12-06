import './user.css';
import './cat.js';

// если экспортируем только одно, то ставим после экспорта default и в импорте без скобок
export class User {
    constructor(firstName, lastName, fatherName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fatherName = fatherName;
    }

    userData() {
       const myDiv = document.createElement('div');
       const myContent = document.createTextNode('Данные пользователя:');
       myDiv.appendChild(myContent);

       const ul = document.createElement('ul');
       myDiv.appendChild(ul);
    
       const li =  document.createElement('li');
       li.innerHTML = this.firstName;
       ul.appendChild(li);

       const liLast =  document.createElement('li');
       liLast.innerHTML = this.lastName;
       ul.appendChild(liLast);

       const fatherName =  document.createElement('li');
       fatherName.innerHTML = this.fatherName;
       ul.appendChild(fatherName);

       document.body.appendChild(myDiv);
        
    }
}

//попытка получить из config.json - не работает

// var tfile;
// var reader = new FileReader();

// function rdfile(files)
// {
//     tfile = files[0];
//     reader.readAsText(tfile);
//     reader.onload = function(e)
//     {
//         str = e.target.result;
//         name = JSON.parse(str);
//         console.log(name[10]);
//     };
// }
// <div><input type="file" id="myfile" onchange="rdfile(this.files)"></div>

