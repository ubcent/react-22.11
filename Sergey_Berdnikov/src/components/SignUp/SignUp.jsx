import './SignUp.css';

//подключаем React
import React, { Component } from 'react';

//подключаем reactstrap компоненты
import {
    Modal,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

// Форма регистрации
const loginForm = (
    <Form>
        <FormGroup>
            <Label for="exampleДщпшт">Login</Label>
            <Input type="text" name="login" id="exampleLogin" placeholder="Login"/>
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="E-mail"/>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password"/>
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">About me</Label>
            <Input type="textarea" name="about" id="exampleText"/>
        </FormGroup>
        <FormGroup>
            <Label for="exampleFile">Photo</Label>
            <Input type="file" name="file" id="exampleFile"/>
            <FormText color="muted">
                Upload your photo.
            </FormText>
        </FormGroup>
        <FormGroup check>
            <Label check>
                <Input type="checkbox"/>{' '}
                Remember me
            </Label>
        </FormGroup>
    </Form>
);

export default class SignUp extends Component
{
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
                <Button color="success" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Registration form</ModalHeader>
                    <ModalBody>
                        {loginForm}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Register</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}