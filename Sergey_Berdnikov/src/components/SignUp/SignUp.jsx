import './SignUp.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import HelpBlock from "react-bootstrap/lib/HelpBlock";
import Checkbox from "react-bootstrap/lib/Checkbox";
import Button from "react-bootstrap/lib/Button";
import Overlay from "react-bootstrap/lib/Overlay";

function FieldGroup({id, label, help, ...props}) {
    return (
      <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
}

const formInstance = (
  <form className="form-SignUp">
      <FieldGroup
        id="formControlsText"
        type="text"
        label="Login"
        placeholder="Enter Login"
      />
      <FieldGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
      />
      <FieldGroup id="formControlsPassword" label="Password" type="password"/>
      <FieldGroup
        id="formControlsFile"
        type="file"
        label="Photo"
        help="Load your photo."
      />

      <Checkbox checked readOnly>
          Remeber me
      </Checkbox>

      <Button type="submit">Submit</Button>
  </form>
);

export default class SignUp extends Component
{
    constructor(props, context) {
        super(props, context);

        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            show: false
        };
    }

    handleToggle() {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
          <div style={{position: 'relative'}}>
              <Button bsStyle="success"
                      ref={button => {
                          this.target = button;
                      }}
                      onClick={this.handleToggle}
              >
                  Login
              </Button>

              <Overlay
                show={this.state.show}
                onHide={() => this.setState({show: false})}
                placement="left"
                container={this}
                target={() => ReactDOM.findDOMNode(this.target)}
              >
                  {formInstance}
              </Overlay>
          </div>
        );
    }
}

