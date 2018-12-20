import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header';

class App extends Component {
    render(){
        return(
            <div>
                <Header size="big" color="yellow" />
                <Header size="small" color="red" />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
)