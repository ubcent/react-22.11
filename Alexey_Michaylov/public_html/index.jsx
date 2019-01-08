import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    {routes.map((route, idx) => <Route key={idx} {...route} />)}
                </Switch>
                <Footer />
            </div>
        );
    }
};

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);
