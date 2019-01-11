import React, { PureComponent } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleSnackbar from 'components/Snackbar';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';


export default class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Sidebar pageWrapId="page-wrap" />
                        <main id="content" className="p-5">
                            <Switch>
                                {routes.map((route, idx) => <Route key={idx} {...route} />)}
                            </Switch>
                        </main>
                        <SimpleSnackbar />
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}