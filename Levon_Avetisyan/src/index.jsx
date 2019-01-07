import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from 'components/Layout';
import routes from './routes'


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    {routes.map((route, idx) => <Route key={idx} {...route} />)}
                </Switch>
            </Layout>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('wrapper'),
);