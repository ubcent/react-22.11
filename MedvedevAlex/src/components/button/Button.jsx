import './Button.css';

import React, {Component} from 'react';

export default class Button extends Component {

  render() {
    const { btnName } = this.props;
    const {loginBtn} = this.props;

    return (
      <div>
        <button className={loginBtn}>{btnName}</button>
      </div>
    )
  }
}