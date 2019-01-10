import './ModalAuthForm.css';
import React, {PureComponent} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class ModalAuthForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  };

  toggle = ()=>{
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button id = "authButton" onClick={this.toggle}>{this.props.buttonLabel}<p>Вход</p></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Авторизация</ModalHeader>
          <ModalBody>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="введите адрес эл.почты" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="введите пароль" />
            </FormGroup>
            <Button>Войти</Button>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Отмена</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };
};

export default ModalAuthForm;