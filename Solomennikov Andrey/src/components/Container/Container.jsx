import './Container.css';
import React, { PureComponent } from 'react';
export default class Container extends PureComponent {
  static defaultProps = {}
  render() {
    const { children } = this.props;
    return (
        <div className="Container">
          {children}
        </div>
    )
  }
}
