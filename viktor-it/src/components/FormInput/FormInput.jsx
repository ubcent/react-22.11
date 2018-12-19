import './FormInput.css';
import React, {Component} from 'react';
import { Form, Input, Button } from 'reactstrap';

export default class FormInput extends Component {
  static defaultProps = {}

  constructor(props){
    super(props);
    this.handleGetUserInput = this.handleGetUserInput.bind(this);
    this.state = {
      gender:'normalWomen',
    };
  }

  handleGetUserInput(event){
    event.preventDefault();
    const { onInfo } = this.props;
    onInfo(this.state);
    let gender1 = document.getElementById('selectGender').value;
    if(gender1 == 'Мужчина'){
      this.state.gender = 'normalMen';
      console.log('Выбран муж.', this.state);
    } else {
      console.log('Выбрана жен.', this.state);
    };
  };

  render() {
    const {gender} = this.state;
    return (
      <div class = "divForm">
      <Form id = "formInput">
      <p>Введите ваши параметры</p>
        <Input type = "text" placeholder="Ваш возраст" bsSize="sm" />
        <Input type = "text" placeholder="Ваш рост" bsSize="sm" />
        <Input  type = "text" placeholder="Ваш вес" bsSize="sm" />
        <Input id = "selectGender" type = "text" placeholder="Ваш пол" type="select" bsSize="sm">
          <option>Женщина</option>
          <option>Мужчина</option>
        </Input>
        <br/>
        <button onClick = {this.handleGetUserInput}>Узнать свой ИМТ</button>
      </Form>
      </div>
    );
  };
};