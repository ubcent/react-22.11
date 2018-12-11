import './Layout.css';
//React импортируем в каждом файле
import React, { Component } from 'react';
//подключаем react-bootstrap
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

//Подключаем свои компоненты
import MyNavbar from '../MyNavbar';
import Content from '../Content';


function handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
}

const navInstance = (
  <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href="/">
          NavItem 1 content
      </NavItem>
      <NavItem eventKey={2} title="Item">
          NavItem 2 content
      </NavItem>
      <NavItem eventKey={3} title>
          NavItem 3 content
      </NavItem>
  </Nav>
);


export default class Layout extends Component
{
    render() {
        return (
          <div>
              <header>
                  <MyNavbar/>
              </header>
              <main>
                  <Grid>
                      <Row className="show-grid">
                          <Col lg={10} sm={10} md={8}>
                              <Content/>
                          </Col>
                          <Col lg={2} sm={2} md={4}>
                              {navInstance}
                          </Col>
                      </Row>
                  </Grid>
              </main>
              <footer>

              </footer>
          </div>
        );
    }
};