import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Container from 'components/Container';
import Counter from 'components/Counter';
import CommentsList from 'containers/CommentsListContainer';
import Footer from 'components/Footer';
import Timer from 'components/Timer';

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
    const { isShown } = this.state;
    return (
      <div>
        <Container>
          <CommentsList />
        </Container>
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root'),
)