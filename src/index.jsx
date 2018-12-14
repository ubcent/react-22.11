import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Container from 'components/Container';
import Counter from 'components/Counter';
import CommentsList from 'components/CommentsList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
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
          <div>Hello world</div>
          <Counter/>
          <CommentsList />
        </Container>

        <button onClick={this.handleToggleClick}>Toggle</button>

        {isShown && <div>Modal window</div>}
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root'),
)