import './Search.css';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Search extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input type="search" name="search" id="exampleSearch" placeholder="search" />
        </FormGroup>
      </Form>
    );
  }
}