const path = require('path');
const fs = require('fs');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
  alias: {
  	name: 'n',
  }
});

const componentName = args.name;
fs.mkdirSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName)
);

const componentCode = `import './${componentName}.css';
import React, {PureComponent} from 'react';

export default class ${componentName} extends PureComponent {
  render(){
    return(
	  <div className="${componentName}"></div>
    );
  };
};`;

const componentStyle = `.${componentName} {

}`;

const componentIndex = `export default from './${componentName}.jsx';`;

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
  componentCode,
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.css`),
  componentStyle, 
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
  componentIndex, 
);