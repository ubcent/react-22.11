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

//код компонента.jsx
const componentCode = `import React, { PureComponent, Fragment } from 'react';

import ${componentName} from 'components/${componentName}';

export default class ${componentName}Container extends PureComponent
{
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    
    render(){
        return (
            <Fragment>
                
            </Fragment>
        );
    }
}
    
`;
//Создаем файл с кодом из {componentCode}
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'containers', `${componentName}Container.jsx`),
    componentCode,
);
