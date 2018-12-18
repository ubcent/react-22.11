import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

export default class ModalWindow extends Component {
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
                <Button className="mt-1" color="danger" size="sm" onClick={this.toggle}>Sign In</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm" className ="bg-dark" dark expand="md">
                    <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Username</Label>
                                <Input type="text" name="name" id="name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" />
                            </FormGroup>
                            <Button color="danger" block>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}