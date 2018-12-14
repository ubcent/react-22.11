import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <div>
        <Header size="small" color="red"/>
        <Content/>
      </div>
  );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);