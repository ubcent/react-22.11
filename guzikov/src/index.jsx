import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header size="big" />  
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);