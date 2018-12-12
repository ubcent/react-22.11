import './Layout.css';
import React, {Component} from 'react';

import { Container, Row, Col } from 'reactstrap';

import Header from '../Header';
import FormInput from '../FormInput';
import FotoBlock from '../FotoBlock';
import News from '../News';
import Video from '../Video';
import Footer from '../Footer';

export default class Layout extends Component {

  render(){
  	const img = require('../FotoBlock/Foto/women.jpg');
    return(
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col xs="3"><FormInput /></Col>
          <Col xs="3"><FotoBlock img={img} /></Col>
          <Col xs="auto"><p><br/><br/>Здесь будет выводиться определенный текст после ввода параметров в input: "Ваш индекс массы тела равен...."</p></Col>
        </Row>
        <Row>
          <Col><News /></Col>
        </Row>
        <Row>
          <Col><Video /></Col>
        </Row>
        <br/>
        <Row>
          <Col><Footer /></Col>
        </Row>
      </Container>
    );
  };
};
