import './FormLogin.css';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormLogin extends Component {
    render() {
      return (
        <Form>
          <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder="email" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="examplePassword" placeholder="password" />
          </FormGroup>
        </Form>
      );
    }
  }