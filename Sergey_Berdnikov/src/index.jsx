//React импортируем в каждом файле
import React, { Component } from 'react';
//ReactDom только в точке входа
import ReactDom from 'react-dom';
//подключаем свои компоненты
import Layout from './components/Layout';
//Подключаем стили бутстрап
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component
{
    render() {
        return (
          <Layout/>
        );
    }
}

ReactDom.render(
  <App/>,
  document.getElementById('main-div'),
);