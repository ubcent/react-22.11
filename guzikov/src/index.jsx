import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Jumbotron/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);