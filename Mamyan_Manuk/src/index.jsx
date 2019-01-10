import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from 'components/Header';
import Main from 'components/Main';
import Content from 'components/Content';
import Footer from 'components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root')
);

