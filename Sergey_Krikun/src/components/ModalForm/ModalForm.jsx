import './ModalForm.css';

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormBootstrap from '../FormBootstrap'

export default class ModalForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="login-button-wrapper">
        <Button color="primary" className="header-button" onClick={this.toggle}>{this.props.buttonLabel}LOG IN</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log in:</ModalHeader>
          <ModalBody>
            <FormBootstrap />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

