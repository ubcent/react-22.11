import React, { Component } from 'react';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    Label, 
    Input 
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
        return(
            <div>
                <Button color="warning" onClick={this.toggle}>Войти</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm">
                    <ModalHeader toggle={this.toggle}>Авторизация</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Имя</Label>
                                <Input type="text" name="name" id="name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Пароль</Label>
                                <Input type="password" name="password" id="password" />
                            </FormGroup>
                            <Button color="success" block>Войти</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}