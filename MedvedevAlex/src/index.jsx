import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'normalize.css';

import routes from './routes';

import Header from 'components/Header';
import Footer from 'components/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route}/>)}
        </Switch>
        <Footer/>
      </div>
    );
  }
}

ReactDom.render(
  <BrowserRouter><App/></BrowserRouter>,
  document.getElementById('root'),
);