const minimist = require('minimist');
const path = require('path');
const fs = require('fs');

//обрезаем первые два параметра
const args = minimist(process.argv.slice(2), {
    alias: {
        name: 'n',
    },
});
//созраняем имя компонента
const componentName = args.name;
//создаем папку с именем компонента
fs.mkdirSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName)
);

//код компонента.jsx
const componentCode = `import './${componentName}.css';

//React импортируем в каждом файле
import React from 'react';

//stateless
export default function ${componentName}(props) {
    return (
        <div className="${componentName}">
            Copyright © Your Website 2018
        </div>
    );
};
`;
//Создаем файл с кодом из {componentCode}
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode,
);
//код компонента.css
const componentCodeCSS = `.${componentName} {}`;
//Создаем файл с кодом из {componentCodeCSS}
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.css`),
    componentCodeCSS,
);

//код index.js
const indexCode = `export default from './${componentName}.jsx';`;
//Создаем файл с кодом из {componentCodeCSS}
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
    indexCode,
);