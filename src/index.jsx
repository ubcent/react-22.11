import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';

import routes from './routes';
import { store, persistor } from './store';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      pageName: 'home',
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({ isShown: !prevState.isShown }))
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route} />)}
          </Switch>
        </Container>
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)