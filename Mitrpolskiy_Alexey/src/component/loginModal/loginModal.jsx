import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import LoginForm from '../loginForm';

export default class LoginModal extends Component {
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
			<div>
				<Button outline color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>LogIn</ModalHeader>
					<ModalBody>
						<LoginForm/>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>Login</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}