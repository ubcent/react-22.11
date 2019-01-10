// пишем генерацию для компонента

// используем два встроенных пакета (fs - пакет для работы с файловой системой)
const path = require('path');
const fs = require('fs');

const minimist = require('minimist');

//в process.argv попадают все параметры
const args = minimist(process.argv.slice(2), {
    alias:{
        name:'n'
    }
});

// создадим папку
const componentName = args.name;
fs.mkdirSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName),
);

// сгенерируем код компонента, используем шаблонные строки
const componentCode = `import './${componentName}.css';
import React, { Component } from 'react';

export default class ${componentName} extends Component {
    render() {
        return (
            <div className = "${componentName}"></div>            
        );
    };
};
`;

// создаем файл и подставляем в него код компонента
fs.writeFileSync(
    // укажем первым параметром путь к файлу, через `` указываем шаблонную строку
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    // указываем, что надо записать - код компонента
    componentCode,
);

// аналогично создаем остальные файлы
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `index.js`),
    `export default  from './${componentName }.jsx';
    `,
);

if(!args.withoutStyle){
    fs.writeFileSync(
        path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.css`),
        `.${componentName} {}`,
    );
};
