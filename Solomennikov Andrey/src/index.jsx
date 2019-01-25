import React, {Component} from 'react';
import ReactDom from 'react-dom';
// import Layout from './components/Layout';
import RTP from './components/RTP';
// import Container from 'components/Container'
// import Main from './components/Main';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                {/*<Layout/>*/}
                <RTP />
            </div>

        );
    }
}

ReactDom.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root'),
);
