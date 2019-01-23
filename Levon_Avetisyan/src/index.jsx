import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Layout from 'components/Layout';
import routes from './routes';
import store from './store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                    </Switch>
                </Layout>
            </Provider>
        );
    }
}

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('wrapper'),
);