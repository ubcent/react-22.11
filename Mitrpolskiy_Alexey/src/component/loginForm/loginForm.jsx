import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginForm extends Component {
	render() {
		return (
			<Form>
				<FormGroup row>
					<Label for="txtLogin" sm={2}>Login</Label>
					<Col sm={10}>
						<Input type="login" name="login" id="txtLogin" placeholder="Enter your Login" />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="txtPassword" sm={2}>Password</Label>
					<Col sm={10}>
						<Input type="password" name="password" id="txtPassword" placeholder="Enter your password" />
					</Col>
				</FormGroup>
			</Form>
		);
	}
}