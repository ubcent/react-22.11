import './SignUp.css';

//подключаем React
import React, { Component } from 'react';

//подключаем reactstrap компоненты
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        <Button>Submit</Button>
    </Form>
);

export default class SignUp extends Component
{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle} style={{marginBottom: '1rem'}}>Login</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card color="dark" className="text-warning">
                        <CardBody>
                            {loginForm}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}