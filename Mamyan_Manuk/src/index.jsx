import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Sidemenu from 'components/Sidemenu';
import Content from 'components/Content';
import Footer from 'components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidemenu/>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);

