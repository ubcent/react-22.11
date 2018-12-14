import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
};

ReactDom.render(
    <App />,
    document.getElementById('root')
);