import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';

import routes from './routes';

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
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root'),
)