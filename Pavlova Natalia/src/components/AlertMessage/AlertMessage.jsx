import './AlertMessage.css';
import React, { Component } from 'react';
import { Alert } from 'reactstrap';

export default class AlertMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        welcome to our site
      </Alert>
    );
  }
}