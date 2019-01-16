import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Header from 'components/Header';
import Search from 'components/Search';
import Categories from 'components/Categories';
import Widget from 'components/Widget';
import Footer from 'components/Footer';

import routes from './routes';
import store from './store';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navHeader: [
                {title: 'Home', href: '/'},
                {title: 'Blog', href: '/blog'},
                {title: 'Comments', href: '/comments'},
                {title: 'Users', href: '/users'},
            ]
        }
    }

    render() {
        const {navHeader} = this.state;
        return (
            <div>
                <Header items={navHeader}/>
                <Container>
                    <Row>
                        <Col xs="8">
                            <Switch>
                                {routes.map((route, idx) =>
                                    <Route key={idx} {...route}/>
                                )}
                            </Switch>
                        </Col>
                        <Col xs="4">
                            <Search/>
                            <Categories/>
                            <Widget/>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('body')
);
