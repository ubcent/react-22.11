const path = require('path');
const fs = require('fs');


const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
    alias: {
        name: 'n'
    }
});

const componentName = args.name;

//create folder
fs.mkdirSync(
    path.resolve(__dirname, '..', 'src', 'components', args.name),
);

//generate component code
const componentCode = `
import './${componentName}.scss';
//import jpg from '';

import React, { PureComponent } from 'react';

export default class ${componentName} extends PureComponent {

    static defaultProps = {}

    render() {
              
        return (
            <div className="${componentName}"></div>
        )
    }
}
`;

//create file
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode,
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.scss`),
    `.${componentName} {}`,
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
    `export default from './${componentName}.jsx';`,
);