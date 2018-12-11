import './Content.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
//подключаем react-bootstrap компоненты
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const news = [
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    'Donec hendrerit tempor tellus.',
    'Donec pretium posuere tellus.',
    'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
    'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Nulla posuere.',
    'Donec vitae dolor.',
    'Nullam tristique diam non turpis.',
    'Cras placerat accumsan nulla.',
    'Nullam rutrum.',
    'Nam vestibulum accumsan nisl.'
];

const gridInstance = (
  <Row className="show-grid">
      <Col sm={6} md={3}>
          <code>
              &lt;
              {'Col sm={6} md={3}'} &gt;
          </code>
          <br/>
          {news.slice(0, 6).join(' ')}
      </Col>
      <Col sm={6} md={3}>
          <code>
              &lt;
              {'Col sm={6} md={3}'}&gt;
          </code>
          <br/>
          {news.slice(0, 4).join(' ')}
      </Col>
      <Col sm={6} md={3}>
          <code>
              &lt;
              {'Col sm={6} md={3}'}&gt;
          </code>
          <br/>
          {news.slice(0, 6).join(' ')}
      </Col>
      <Col sm={6} md={3}>
          <code>
              &lt;
              {'Col sm={6} md={3}'}&gt;
          </code>
          <br/>
          {news.slice(0, 2).join(' ')}
      </Col>
  </Row>

);

export default class Content extends Component
{
    render() {
        return (
          <div>
              {gridInstance}
              <hr/>
              {gridInstance}
              <hr/>
              {gridInstance}
          </div>
        );
    }
};