import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';

import routes from './routes';
import store from './store';

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)