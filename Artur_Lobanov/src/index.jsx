import 'bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header';
import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
            //с помощью проперти мы можем передать данные из родительского компонента в дочерний
            <div>
                {/* size - это свойство компонента, можно получить в props в header.jsx */}
                {/* <Header size = "small"/>  */}
                
                <Layout />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
)