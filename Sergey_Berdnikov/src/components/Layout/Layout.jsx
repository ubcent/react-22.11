import './Layout.css';
//React импортируем в каждом файле
import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

//Подключаем свои компоненты
import MyNavbar from '../MyNavbar';
import Content from '../Content';




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
                          <Col xs={12} md={8}>
                              <Content/>
                          </Col>
                          <Col xs={6} md={4}>
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