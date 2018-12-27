import React, {PureComponent, Fragment} from 'react';

import News from 'components/News'

export default class NewsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  getState() {
    const {news} = this.props;
    const object = {};
    for (let i = 0; i < news.length; i++) {
      object['text' + (i + 1)] = false;
    }
    return object
  }

  showTextButton = (event) => {
    const id = event.target.name;
    this.setState({[id]: !this.state[id]});
  };

  render() {
    const {news} = this.props;
    const showTextButton = this.showTextButton;
    const state = this.state;
    return (
      <Fragment>
        <News news={news} showTextButton={showTextButton} state={state}/>
      </Fragment>
    )
  }
}