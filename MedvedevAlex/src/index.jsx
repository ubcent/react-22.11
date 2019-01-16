import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'normalize.css';

import routes from './routes';
import store from './store';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from "components/Content";

class App extends Component {

  render() {
    return (
      <div>
        <Content>
          <Header/>
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
          </Switch>
        </Content>
        <Footer/>
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);