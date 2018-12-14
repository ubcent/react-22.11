import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header';
import Sidemenu from './components/Sidemenu';
import Content from './components/Content';

class App extends Component {
    render() {
        return (
            <div>
              <Header />
              <Sidemenu />
              <Content />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);