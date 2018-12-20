import './Layout.css';
import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from 'components/Header';
import FormInput from 'components/FormInput';
import FotoBlock from 'components/FotoBlock';
import News from 'components/News';
import Video from 'components/Video';
import Footer from 'components/Footer';

export default class Layout extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);

    this.state = {
      gender: '',
    }
  }

  handleInfo = (info) => {
    this.setState((prevState) => ({
      gender: prevState.gender.concat([info]),
    }));
    console.log('Из Layout', this.state);
  }

  render(){
    const { gender } = this.state;
    return(
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col xs="3"><FormInput onInfo={this.handleInfo}/></Col>
          <Col xs="3"><FotoBlock /></Col>
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
