import './style.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header'
import Main from './components/Main'


class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <Header />
                    <Main />
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
)