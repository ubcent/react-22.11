import './FormInput.css';
import React, {Component} from 'react';

import { Form, Input, Button } from 'reactstrap';

export default class FormInput extends Component {

  render() {
    return (
      <div class = "divForm">
      <Form>
      <p>Введите ваши параметры</p>
        <Input placeholder="Ваш возраст" bsSize="sm" />
        <Input placeholder="Ваш рост" bsSize="sm" />
        <Input placeholder="Ваш вес" bsSize="sm" />
        <Input placeholder="Ваш пол" type="select" bsSize="sm">
          <option>Женщина</option>
          <option>Мужчина</option>
        </Input>
        <br/>
        <Button color="secondary">Проверить ИМТ</Button>{' '}
      </Form>
      </div>
    );
  };
};