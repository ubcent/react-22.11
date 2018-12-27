import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Container from 'components/Container'
import Header from 'components/Header'
import Content from 'components/Content';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header />
          <Content />
          <Footer />
        </Container>
      </div>
  );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);